import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    item: {},
    reviews: {},
    loggedIn: false,
    loginError: '',
    registerError: '',
    id: 2,
    //will need items here?
  },
  getters: {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    loginError: state => state.loginError,
    registerError: state => state.registerError,
    reviews: state => state.reviews,

  },
  mutations: {
    setUser (state, user) {
      state.user = user;
    },
    setLogin (state, status) {
      state.loggedIn = status;
    },
    setLoginError (state, message) {
      state.loginError = message;
    },
    setRegisterError (state, message) {
      state.registerError = message;
    },
    setReviews (state, reviews) {
      console.log(reviews);
      state.reviews = reviews;
    }
  },
  actions: {
    // Registration, Login //
      register(context,user) {
        axios.post("/api/users",user).then(response => {
          context.commit('setUser', response.data.user);
          context.commit('setLogin',true);
          context.commit('setRegisterError',"Register Success!");
          context.commit('setLoginError',"");
        }).catch(error => {
            context.commit('setLoginError',"");
            context.commit('setLogin',false);
            if (error.response) {
            if (error.response.status === 403)
              context.commit('setRegisterError',"That email address already has an account.");
            return;
        }
          context.commit('setRegisterError',"Sorry, your request failed. We will look into it.");
        });
      },
      login(context,user) {
      axios.post("/api/login",user).then(response => {
      	context.commit('setUser', response.data.user);
      	context.commit('setLogin',true);
      	context.commit('setRegisterError',"");
      	context.commit('setLoginError',"Login success!");
      }).catch(error => {
    	context.commit('setRegisterError',"");
      	if (error.response) {
      	  if (error.response.status === 403 || error.response.status === 400)
      	    context.commit('setLoginError',"Invalid login.");
      	  context.commit('setRegisterError',"");
      	  return;
      	}
    	context.commit('setLoginError',"Sorry, your request failed. We will look into it.");
      });
    },
    logout(context,user) {
      context.commit('setUser', {});
      context.commit('setLogin',false);
    },

    //getReviews //
    getReviews(context) {
      axios.get("/api/items/" + context.state.id + "/reviews").then(response => { //need to change this to item.id
        context.commit('setReviews', response.data.reviews);
      }).catch(err => {
          console.log("getReviews failed:",err);
      });
    },

    addReview(context, review) {
      console.log(review.username);
      console.log(review.review);
      axios.post("/api/items/" + context.state.id + "/reviews", review).then(response => {//change this to item.id as well
        return context.dispatch('getReviews');
      }).catch(err => {
          console.log("addReview failed:",err);
      });
    },

    deleteReview(context, review){
      console.log(review.reviewid);
      axios.delete("/api/items/" + context.state.id + "/reviews/" + review.reviewid).then(response => {
        console.log("getting reviews");
	       return context.dispatch('getReviews');
      }).catch(err => {
      });
    }


  }
});
