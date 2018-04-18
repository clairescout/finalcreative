<template>
<div>

<main>
    <agile :arrows="false" :speed="750"
    :timing="'linear'" :fade="true"
    :autoplay="true" :pauseOnHover="true">

        <div class="slide1"></div>
        <div class="slide2"></div>
        <div class="slide3"></div>
        <div class="slide4"></div>

    </agile>
</main>

   </div>
</template>

<script>
import Modal from './Modal';
//<modal v-if="showModal" ></modal>
//<b-carousel-slide
//                  img-src="../static/photos/beads.JPG"
//></b-carousel-slide>

//<!-- Slides with custom text -->
//<b-carousel-slide img-src="../static/photos/dome.JPG">
//</b-carousel-slide>

//<!-- Slides with image only -->
//<b-carousel-slide img-src="../static/photos/greece.JPG">
//</b-carousel-slide>


//<b-carousel-slide img-src="../static/photos/shuk.JPG">
//</b-carousel-slide>

 export default {
   name: 'HomePage',
   components: {Modal},
   data () {
     return {
       showModal: true,
     }
   },
   methods: {
     closeModal(){
      this.showModal = false;
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
     width: 100px;
 }

 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
 .modal .modal-dialog-centered{
   width: 50%;
   font-family: 'Tajawal', sans-serif;
 }

 .slide1 {
  background-image: url("/static/photos/beads.JPG");
  height: 550px;
  background-size: cover;
 }

 .slide2 {
  background-image: url("/static/photos/dome.JPG");
  height: 550px;
  background-size: cover;
 }

 .slide3 {
  background-image: url("/static/photos/greece.JPG");
  height: 550px;
  background-size: cover;
 }

 .slide4 {
  background-image: url("/static/photos/shuk.JPG");
  height: 550px;
  background-size: cover;
 }



 .agile {
    &__dots {
        bottom: 0;
        display: block;
        left: 10px;
        position: absolute;
        width: 30px;
    }

    &__dot {
        margin-bottom: 10px;

        button {
            background-color: transparent;
            border: 1px solid #fff;
            margin-top: 10px;

            &:hover {
                background-color: #fff;
            }
        }

        &--current {
            button {
                background-color: #fff;
            }
        }
    }
}

</style>
