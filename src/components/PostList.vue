<template>
</template>
  <!-- <div>

  <v-container>
    
       <v-row>
           
           <v-col cols="6"  v-for="item in items" :key="item.id">
               <v-card outlined  >
               <v-img
               :src="item.src">
               </v-img>
               <v-card-subtitle class="pb-0" v-text="item.title" ></v-card-subtitle>
               <v-card-title>
                   <h4 class="ti--post" v-text="item.body" ></h4>
               </v-card-title>
               <v-card-text class="c--text">
                   {{item.text}}
               </v-card-text>
               <v-card-actions>
                   <v-btn color="primary" text>Read more →</v-btn>
               </v-card-actions>
               </v-card>
           </v-col>
       </v-row>
      

   </v-container>

 </div>

</template>
<script>
import axios from 'axios'
export default {
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
</script> --> 