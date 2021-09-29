<template>
    
   
 <v-breadcrumbs :items="items">
    <template v-slot:item="{ item } ">
      <v-breadcrumbs-item 
        :to="item.to"
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text }}
        
      </v-breadcrumbs-item>
      
    </template>
  </v-breadcrumbs>
    
    
   
</template> 

 
<script>

export default {
  

    data: () => ({
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '#',
          to: '/'
        },
        {
          text: 'ABOUT',
          disabled: false,
          href: '#',
          to:'/about'
        },
        {
          text: 'CONTACT',
          disabled: false,
          href: '#',
          to:'/contact'
        },
      ],
    }),
  }

</script> 