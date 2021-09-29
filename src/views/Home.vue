<template>

   <div>
  <Navbar/>   
<Header/>
  <v-container>
    <!-- <v-row> -->
  <MainPost/>
  <!-- <Sidebar/> -->
  
    <!-- </v-row> -->  
  </v-container> 
  <!-- <PostList/> -->
  <!-- <Pagination/> -->
 
 <Footer/>

 </div>



</template>

<script>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'
import MainPost from '../components/MainPost.vue'


import Footer from '../components/Footer.vue'
  export default {
    name: 'Home',

    components: {
      Navbar,
      Header,
      MainPost,
    
      Footer
    },
  }
</script>
