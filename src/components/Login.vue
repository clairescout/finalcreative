<template>
  <div class="column">

    <form v-on:submit.prevent="register">
      <p>Create an account.</p>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email Address">
      <input class="narrow" type="password" v-model="password" placeholder="Password">
      <button  id="typicalbutton" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>

    <br>
    <form v-on:submit.prevent="login">
    <p> Or login </p>
      <input class="narrow" v-model="loginemail" placeholder="Email Address">
      <input class="narrow" type="password" v-model="loginpassword" placeholder="Password">
      <button  id="typicalbutton" type="submit">Login</button>
    </form>
    <p class="error">{{loginError}}</p>
  </div>
</template>

<script>
export default {
   name: 'Login',
   data () {
     return {
       email: '',
       password: '',
       name: '',
       loginemail: '',
       loginpassword: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
     loginError: function() {
       return this.$store.getters.loginError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
         email: this.email,
         password: this.password,
	       name: this.name,
       });
     },
     login: function() {
       this.$store.dispatch('login',{
          email: this.loginemail,
          password: this.loginpassword,
       });
     },
   }
 }
</script>

<style scoped>

form {
  padding-left: 100px;
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
