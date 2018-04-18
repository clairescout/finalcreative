<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader';
 import AppFooter from './components/AppFooter';


 export default {
   name: 'App',
   components: { AppHeader, AppFooter},

   methods: {

   }
 }
</script>

<style>
 /* https://color.adobe.com/CS04-color-theme-1994456/?showPublished=true */
 @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif');
 import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 body {
     font-size: 18px;
     padding: 20px 100px 0px 100px;
     font-family: 'Tajawal', sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
 }
p {
  font-family: 'Tajawal', sans-serif;
  font-size: .9em;
}

button {
   background-color: white;
   font-family: 'Tajawal', sans-serif;

   font-size: .9em;
   text-align: center;
   padding-top: 8px;
   paddin-bottom: 4px;

}

 h2 {

   font-family: 'Tajawal', sans-serif;
 }

 h3 {
  font-family: 'Tajawal', sans-serif;
  font-size: 1.4em;
  color: black;
  //color: #009494;
 }


 input {
     height: 20px;
     padding: 10px;
 }
 .flexWrapper {
     display:flex;
 }
 .flexRight {
     margin-left: auto;
 }
 .error {
     color: #F35537;
 }
 .column {
     width: 800px;
 }

 form {
  font-family: 'Tajawal', sans-serif;
 }


</style>
