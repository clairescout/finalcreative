<template>
  <div>
    <div  class = "head">
      <h1>Red Thread </h1>
    </div>
    <div class = "menu">
      <nav>
        <ul id="menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/redthreaders">Red Threaders</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
 export default {
   name: 'AppHeader',
   data () {
     return {
       email: '',
       password: '',
     }
   },
   methods: {
      signIn() {

      },
   }

 }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal');
 /* Strip the ul of padding and list styling */
 nav {

     margin-bottom: 0px;
     text-align: center;
 }
 ul {
    display: inline-block;
     list-style-type:none;
     margin:0;
     padding:0;
     color: #666666;
 }
 /* Create a horizontal list with spacing */
 li {
    font-family: 'Tajawal', sans-serif;
     display:inline-block;
     float: left;
     margin-right: 40px;
     margin-left: 40px;
     font-size: .9em;
     margin-bottom: 0px;

     text-align: center;
     line-height: 50px;
     color: #666666;
     layout-gravity: center;
     position: relative;
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
  color: #F69A9A;
 }
 .right {
     float: right;
 }
 .errorPlace {
     height: 20px;
 }
 img {
     width: 50px;
 }
 a {
    color: #000000;
    text-decoration: none;
 }
 hr {
    width: 100%;
    color: #F8F8F8;
 }
 h1{

  text-align: center;
  font-family: 'IBM Plex Serif', serif;
  font-size: 1.6rem;
  color: #F53939;
  letter-spacing: 3px;

 }


 .head {
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 0px;
}


</style>
