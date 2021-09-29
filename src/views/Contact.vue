<template>
  <div >
    <Navbar/>
    <ContactForm/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import ContactForm from '../components/ContactPage/ContactForm.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    Navbar,
    ContactForm,
    Footer
  }
}
</script>