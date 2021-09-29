<template>
       <div>
<Navbar/>
  <v-container>
    
       
           
           <v-col v-for="item in items" :key="item.id">
               <v-card outlined  >
                   <v-row>
                   <v-col cols="6">
               <v-img
               src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1593789251934-BEVWEKSFI1Y9ADK91Y4C/0.png?format=750w">
               
               </v-img>
                   </v-col>
              
                   <v-col cols="6">
               <v-card-subtitle class="pb-0" v-text="item.title" ></v-card-subtitle>
               <v-card-title>
                   <h4 class="ti--post" v-text="item.body" ></h4>
               </v-card-title>
               <v-card-text class="c--text">
                   {{item.text}}
               </v-card-text>
               
               <v-hover
        v-slot="{ hover }">
        <div class="post-btn ">
    <router-link  class="p--btn" :class="{ 'on-hover': hover }" :to="{name: 'PostDetail', params:{id:item.id}}">
      
       Read more →
    
    </router-link>
        </div>
 </v-hover>
            
                   </v-col>
                   </v-row>
                </v-card>
           </v-col>
       
    
      

   </v-container>
   <Pagination/>
<Footer/>
 </div>

</template>
<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Pagination from '../components/Pagination.vue'
export default {
    props:['PostDetail'],
    components:{
        Navbar,
        Pagination,
    Footer
},
    created () {
        
        axios.get("/posts").then(Response => {
            console.log(Response.data)
            this.items = Response.data
        })
    },
    data(){
        return{
            items:[]
            
        }
    }
}
</script>
<style scoped>
.post-btn{
text-align: center;

    padding: 13px 26px;
    width: auto;
   display: inline-block;
   cursor: pointer;
}
a.p--btn{
   text-decoration: none;
    color: rgba(28,28,28,.7) !important;
 } 
 .p--btn.on-hover{
 color:  rgb(190, 190, 190) !important;
 }
 .p--btn{
       font-family: montserrat;
    font-size: 15px;
    font-weight: 900; 
    
 }
</style>