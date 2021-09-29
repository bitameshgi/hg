
 
      <template>
  <v-footer
    dark
   
  >
  <div>
    <v-row>
  <v-col cols="4">
<ul >
  <li><router-link class="Foo-links" to="/Home">HOME</router-link></li>
  <li><router-link class="Foo-links" to="/contact">CONTACT</router-link></li>
  <li><router-link class="Foo-links" to="/about">ABOUT</router-link></li>
 
</ul>
  </v-col>
  <v-col cols="4">
  </v-col>
   
    <v-col
    cols="4">
        <v-btn color="grey darken-4 "
          v-for="icon in icons"
          :key="icon"
         
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
    </v-col>
    </v-row>
    <div class="Foo-bottom">
      <hr>
      <p class="text-center">© 2019 AmandaRachLee<br>
AmandaRachLee™, Doodle Planner™ and Lil Doodles™ are trademarks of AmandaRachLee Productions Incorporated.</p>
    </div>
  </div>

  </v-footer>
      </template>
        
  
      <script>
      export default {
        
          data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-youtube',
        'mdi-instagram',
      ],
          }
      
          )} 
     </script> 
      
   <style scoped="ul">
      ul{
  list-style: none;
}
   
  a.Foo-links
      {
         color:#000;
           text-decoration: none;
}
.Foo-links:hover{
  color:rgba(0,0,0,.3);
}

      </style>
      
      <style scoped="text-center">   
        p{
              color: rgba(29,29,29,.7);
              text-align: center;
        }  
      </style>
      <style scoped="row">   
        .row{
          margin: 30px;    
        }  
        .v-btn--icon{
          color: black!important;
          margin: 6px;
        }
      </style>
   