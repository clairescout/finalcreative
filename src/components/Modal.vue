<template>
<transition name="modal">
 <div class="modal" ref="myModalRef" id="mymodal" style="display: block">
  <div class="modal-dialog"  role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">
          Welcome!
        </h4>
      </div>

      <div class="modal-body">
        <p> Be the first to know about exclusive offers, new arrivals, and more.
        <form>
          <input v-model="email" placeholder="Email Address">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button"  @click="hideModal" data-dismiss="modal">Close</button>
        <button type="button"  >Save changes</button>
      </div>

    </div>
  </div>
</div>
</transition>
</template>

<script>
 export default {
   name: 'Modal',
   data () {
     return {
       email: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
        	 username: this.username,
                 email: this.email,
                 password: this.password,
        	 name: this.name,
       });
     },
     hideModal () {
      
    },
   }
 }
</script>

<style-scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal');




.modal .modal-dialogue .modal-content .modal-header .modal-title {
  font-family: 'Tajawal', sans-serif;
}

#mymodal .modal-body {
 font-family: 'Tajawal', sans-serif;
}

h4 {
 font-family: 'Tajawal', sans-serif;
}


</style>
