<template>
  <div >
    <Navbar/>
    <AboutHeader/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import AboutHeader from '../components/AboutPage/AboutHeader.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{
    Navbar,
    AboutHeader,
    Footer
  }
}
</script>