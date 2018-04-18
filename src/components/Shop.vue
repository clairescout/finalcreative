<template>
  <div>
    <div class = "container">
      <div class="item">
        <img src = "/static/photos/greece.JPG"/>
      </div>
      <div class="item2">
        <h2> First Item </h2>
        <p> $100.00 </p>
        <star-rating      v-bind:increment="0.5"
               v-bind:star-size="20"
               v-bind:max-rating="5"
               active-color="#F69A9A"
               inactive-color="#F53939"

               v-bind:inline=true
               v-bind:show-rating="false">
        </star-rating>
        <br>
        <br>
        <span> Quantity </span>
        <select v-model="selected">
          <p>Quantity: </P>
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.value }}
          </option>
        </select>

        <br>
        <br>
        <br>

        <button id="cartbutton"  type="submit">Add To Cart</button>
        <br>
        <br>
        <h3>Details</h3>
        <p>Some really great details about the product are going to go here eventually. Can't wait for the day. </p>
      </div>


      <div class="item3">
        <br/>
          <form v-on:submit.prevent="review" class="reviewForm">
            <textarea v-model="name" placeholder="Name"/><br/>
            <textarea v-model="reviewtext" placeHolder="Review"/><br/>
            <div class="buttonWrap">
              <button id="typicalbutton" type="submit">Submit Review</button>
            </div>
          </form>

      </div>

    <br/>

    </div>

      <div class="container2">

        <div v-for="item in reviews" class="item">
        <hr/>
          <div class="item4">
            <p class="name">Name:  {{item.username}}</p>
          </div>
          <div class="item5">
            <p class="review">Review:  {{item.review}}</p>
          </div>
          <button id="typicalbutton" v-on:click="deleteReview(item)">Delete Review</button>
          <hr/>
        </div>

      </div>

  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Shop',
  data () {
    return {
      selected: 1,
      name: "",
      reviewtext: "",
      options: [
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
        { text: 'Five', value: 5 },
        { text: 'Six', value: 6 }
      ],
    }

  },
  created: function() {
     this.$store.dispatch('getReviews');
  },
  watch:{
    '$route.query.reviews'() {

    },
  },
  computed: {
     reviews: function() {
       return this.$store.getters.reviews;
     },

   },
  filters: {
     since: function(datetime) {
       moment.locale('en', {
      	 relativeTime: {
      	   future: 'in %s',
      	   past: '%s',
      	   s:  'seconds',
      	   ss: '%ss',
      	   m:  '1m',
      	   mm: '%dm',
      	   h:  'h',
      	   hh: '%dh',
      	   d:  'd',
      	   dd: '%dd',
      	   M:  ' month',
      	   MM: '%dM',
      	   y:  'a year',
      	   yy: '%dY'
      	 }
       });
       return moment(datetime).fromNow();
     },
   },
  methods: {
    deleteReview: function(theReview) {
       this.$store.dispatch('deleteReview',{
          reviewid: theReview.id,
       }).then(review => {
          this.$store.dispatch('getReviews');
       });
    },
    review: function() {
      this.$store.dispatch('addReview', {
         username: this.name,
         review: this.reviewtext,
      }).then(review => {
          this.reviewtext="";
      });
    },

  }
}

</script>


<style scoped>


button {
  background: #FFFFFF;
}
.container {
  display: grid;
  grid-template-columns: [second] 70% [third] 30% [end];
  grid-template-rows: [first] 70% [second] 30% [last];
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.container2 {
  display: grid;
  grid-template-columns: [yo] 30% [second] 70% [end];
}

.item4 {
  grid-column-start: yo;
  grid-column-end: second;
}

.item5 {
  grid-column-start: second;
  grid-column-end: end;
}
.item {
  grid-column-start: second;
  grid-column-end: third;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.item2 {
  grid-column-start: third;
  grid-column-end: auto;
}

.item3 {
  grid-column-start: second;
  grid-column-end: end;
  grid-row-start: second;
  grid-row-end: last;
}

select {
    font-size: .9em;
   font-family: 'Tajawal', sans-serif;
}

span {
font-size: .9em;
font-family: 'Tajawal', sans-serif;
}

star-rating {
  star-size: "10";
}

#cartbutton {
 background-color: #98B5E3;
 color: white;
 width: 100%;
}

#cartbutton:hover{
background-color: #B9D0F2;
}

#typicalbutton {
background-color: #98B5E3;
color: white;
width: 15%;

}

#typicalbutton:hover{
  background-color: #B9D0F2;
}

</style>
