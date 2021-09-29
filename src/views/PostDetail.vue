<template>
    <div >
    <Navbar/>
    <v-container>
    
       
           
           <v-col >
               <v-card outlined  >
                   <v-row>
                   <v-col cols="6">
               <v-img
               src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1593789251934-BEVWEKSFI1Y9ADK91Y4C/0.png?format=750w">
               
               </v-img>
                   </v-col>
              
                   <v-col cols="6">
                  <v-card-subtitle>
                {{post.title}}
               </v-card-subtitle>
               <v-card-title>
                   <h4 class="ti--post" v-text="post.body" ></h4>
               </v-card-title>
               <v-card-text class="c--text">
                   {{post.text}}
               </v-card-text>
            
                   </v-col>
                   </v-row>
                </v-card>
           </v-col>
       
    
      

   </v-container>
    <Footer/>
  </div>
</template>
<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    props:['id'],
    components:{
        Navbar,
Footer
    },
     created () {
         
        axios.get(`/posts/${this.$props.id}`).then(Response => {
            console.log(Response.data)
            this.post = Response.data
        })
    },
    data(){
        return{
           post:{}
}
    }
}
</script>