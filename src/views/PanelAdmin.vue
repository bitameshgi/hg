<template>
  <div>
    <Navbar />
    <v-col cols="8">
      <h2 class="ti-post">Create Post:</h2>

      <v-form class="post-fo"  @submit.prevent="validate">
        <label> Title</label>
        <v-text-field
          v-model="Title"
          :counter="10"
          outlined
          required
        ></v-text-field>
        <label> Body</label>
        <v-textarea v-model="Body" outlined required> </v-textarea>

        <v-btn type="submit" > Create Post </v-btn>
      </v-form>
    </v-col>
  </div>
</template>


<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  created() {
    //     const form = new FormData();
    //     axios.post("/posts", form,{
    //         title:form.title,
    //         body:form.body,
    //     })
    //    .then(Response => {
    //         console.log(Response.data)
    //     })
  },
  data: () => ({
    valid: true,
    Title: "",
    TitleRules: [
      (v) => !!v || "Title is required",
      (v) => (v && v.length <= 10) || "Title must be less than 10 characters",
    ],
    Body: "",
    BodyRules: [
      (v) => !!v || "Body is required",
      (v) => /.+@.+\..+/.test(v) || "Body must be valid",
    ],
  }),
  methods: {
    //   reset () {
    //     this.form.reset()
    //   },
    validate() {
      const newvalidate = {
        Title: this.Title,
        Body: this.Body,
      };
      axios
        .post(`/posts`, newvalidate)
        .then((Response) => {
          console.log(Response.data);
          console.log(newvalidate);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.ti-post {
  padding: 20px;
}
</style>
<style scoped>
.post-fo {
  padding: 20px;
}
</style>