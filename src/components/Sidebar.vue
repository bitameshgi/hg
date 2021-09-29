<template>
</template>
     <!-- <v-col
          cols="12"
          sm="6"
          md="4"
        >
        <v-card class="mt-6">
          <v-card-text class="card-header">
       
            search
            
          </v-card-text>
         
          <v-text-field class="ma-5" 
            append-icon="mdi-magnify"
            placeholder="Enter search term..."
            solo  
          >
          </v-text-field>   
         
        </v-card>
         
        <v-card class="mt-6">
          <v-card-text class="card-header">
            Categories
          </v-card-text>
         <v-virtual-scroll
        :bench="benched"
         :items="items" 
        height="140" 
        item-height="64"
      >
        
          <v-list flat>
     
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
         </v-virtual-scroll>
        </v-card>
         
        <v-card class="mt-6">
          <v-card-text class="card-header">
       
            Side Widget
            
          </v-card-text>
          <v-card-title class="txt">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
          </v-card-title>
        </v-card>
         
    </v-col>
  
 
</template>
<script>
  export default {
    data: () => ({
      selectedItem: 1,
       benched: 0,
      items: [
        { text: 'Web Design'},
        { text: 'HTML'},
        { text: 'Freebies' },
        { text: 'JavaScript' },
        { text: 'CSS' },
        { text: 'Tutorials' },
      ],
    }),
  }
</script> -->
