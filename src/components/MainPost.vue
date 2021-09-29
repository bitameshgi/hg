
<template>  

  <v-col
   >
     
  <img src="http://www.laclaudine-fotografie.de/wp-content/uploads/2020/02/newpost.png">

 <v-hover
        v-slot="{ hover }">
        <div class="button-more ">
    <router-link  class="more--btn" :class="{ 'on-hover': hover }" to="/PostList">
      
      
    WATCH MORE!
    </router-link>
        </div>
 </v-hover>
    
    <v-col
    cols="12"
    
           >
        <v-card outlined
          >
    <v-img  
     
      src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
    >
      
    </v-img>

    <v-card-subtitle class="pb-1" >
      January 1, 2021
    </v-card-subtitle >
<v-card-title class="py-1 fw-bold">Featured Post Title</v-card-title>
    <v-card-text class="c--text">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
    </v-card-text>

    
        </v-card> 
         </v-col>
  </v-col>
      </template>
      <script>
        
      export default {
        props: ['PostList']
      }
      </script>
      <style scoped>
    .more--btn{
  
    
    font-family: montserrat;
    font-size: 14px;
    font-weight: 900; 
    
    
    
 }
  </style>
  <style scoped>
  
 
  a.more--btn{
   text-decoration: none;
    color: rgba(28,28,28,.7) !important;
 } 
 </style>
 <style scoped>
 
 .more--btn.on-hover{
 color: rgba(0,0,0,.3) !important;
 }
  
  </style>
 <style scoped>
 
 .button-more{
 text-align: center;
 background-color: #ffdacc !important;
    border-color: #ffdacc !important;
    padding: 13px 26px;
    width: auto;
   display: inline-block;
   cursor: pointer;
    
 }
  
  </style>