<template>
 
   
     <v-row >
    <v-col
      cols="6"
      
    >
      <v-card ref="form" class="mt-5">
          <div class="form-text">
        <v-text>  ** PLEASE NOTE: all questions regarding <strong>SHOP AMANDARACHLEE & DOODLE PLANNER</strong> should NOT be sent through this form. 
        Please email <strong>@shopamandarachlee.com</strong> and a customer service team member will be in touch. This form is for other inquiries only.</v-text>
          </div>
        <v-card-text>
          <label> Full Name</label>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
           placeholder="John Doe"   
            outlined
            required
          ></v-text-field>
          <label> Email Address </label>
          <v-text-field
            ref="Email"
            v-model="Email"
            :rules="[() => !!Email || 'This field is required']"
            :error-messages="errorMessages"
           outlined
            placeholder="businessadmin@gmail.com"
            
            required
          ></v-text-field> 
           <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div >
         Working 
         with Amanda
        </div>
      </template>
    </v-checkbox>
        </v-card-text>
        <v-divider ></v-divider>
        <v-card-actions>
          <v-btn  
         
           text
            @click="submit">
            Submit
          </v-btn>
          
        </v-card-actions>
      </v-card>
     </v-col> 
   </v-row> 
</template>
   <script>
      export default {
        
          data: () => ({
     
  
      errorMessages: '',
      name: null,
      formHasErrors: false,
      errorMessages: '',
      name: null,
      formHasErrors: false,
    }),

    computed: {
      form () {
        return {
          name: this.name,
          Email: this.Email,
           checkbox: false,

        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
    
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },

   
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
   
      }
      
      </script>  
<style scoped>
.v-btn{
    background-color: #ffdacc;
   margin-top: 20px;
}
</style>
<style scoped>
.row{
   justify-content: center;
   background-color: #f7fafe;
   
}
</style>
<style scoped>
.v-sheet.v-card:not(.v-sheet--outlined){
   margin: 30px;
   background-color: #f7fafe;
}
</style>
<style scoped>
.v-card > *:last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
   padding-bottom:30px;
 justify-content: center;
}
</style>


  