// Express Setup
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Knex Setup
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// bcrypt setup
let bcrypt = require('bcrypt');
const saltRounds = 10;

// jwt setup
const jwt = require('jsonwebtoken');
let jwtSecret = process.env.jwtSecret;
if (jwtSecret === undefined) {
  console.log("You need to define a jwtSecret environment variable to continue.");
  knex.destroy();
  process.exit();
}

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ error: 'No token provided.' });
  jwt.verify(token, jwtSecret, function(err, decoded) {
    if (err)
      return res.status(500).send({ error: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userID = decoded.id;
    next();
  });
}

app.post('/api/items/:id/reviews',  (req, res) => {

  // if(!req.params.review)
  //   console.log("no review!");
  //   return res.status(400).send();
  let id = parseInt(req.params.id);

  knex('items').where('id',id).first().then(item => {
    return knex('reviews').insert({item_id: id, username:req.body.username, review:req.body.review, created: new Date()});
  }).then(ids => {
      return knex('reviews').where('id',ids[0]).first();
  }).then(review => {
      res.status(200).json({review:review});
      return;
  }).catch(error => {
        console.log(error);
        res.status(500).json({error});
  })

});



app.get('/api/items/:id/reviews', (req, res) => {
  // console.log("hello2");
  let id = parseInt(req.params.id);
  // console.log(id);
  knex('reviews')
    .where('item_id',id)
    .orderBy('created','desc')
    .select('review','username','created','id').then(reviews => {
      // console.log("in then");
      //console.log(reviews);
      res.status(200).json({reviews:reviews});
    }).catch(error => {
      console.log("errrorrrr");
      res.status(500).json({ error });
    });
});

app.delete('/api/items/:id/reviews/:reviewid', (req, res) => {
  console.log("in delete");

  let id = parseInt(req.params.id);
  let reviewid = parseInt(req.params.reviewid);

  // let removeIndex = reviews.map(review => { return review.id; }).indexOf(id);
  // if (removeIndex === -1) {
  //   res.status(404).send("Sorry, that review doesn't exist");
  //   return;
  // }
  // items.splice(removeIndex, 1);
  // res.sendStatus(200);
  knex('reviews').where('id',reviewid).del().then(reviews => {
    res.status(200);
  }).catch(error => {
    res.status(500).json({error});
  })
});

//login//
app.post('/api/login', (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user === undefined) {
      res.status(403).send("Invalid credentials");
      throw new Error('abort');
    }
    return [bcrypt.compare(req.body.password, user.hash),user];
  }).spread((result,user) => {
    // if (result)
    //   res.status(200).json({user:{email:user.email,name:user.name,id:user.id}});
    // else
    //   res.status(403).send("Invalid credentials");
    if (result) {
       let token = jwt.sign({ id: user.id }, jwtSecret, {
        expiresIn: 86400 // expires in 24 hours
       });
      res.status(200).json({user:{email:user.email,name:user.name,id:user.id},token:token});
    } else {
       res.status(403).send("Invalid credentials");
    }
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});


//register//
app.post('/api/users', (req, res) => {
  if (!req.body.email || !req.body.password  || !req.body.name)
    return res.status(400).send();
  knex('users').where('email',req.body.email).first().then(user => {
    if (user !== undefined) {
      res.status(403).send("Email address already exists");
      throw new Error('abort');
    }
    return bcrypt.hash(req.body.password, saltRounds);
  }).then(hash => {
    return knex('users').insert({email: req.body.email, hash: hash,
				 name:req.body.name, role: 'user'});
  }).then(ids => {
    console.log(ids);
    return knex('users').where('id',ids[0]).first().select('email','name','id');
  }).then(user => {
    // res.status(200).json({user:user});
    let token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).json({user:user,token:token});
    return;
  }).catch(error => {
    if (error.message !== 'abort') {
      console.log(error);
      res.status(500).json({ error });
    }
  });
});


app.listen(3000, () => console.log('Server listening on port 3000!'));
