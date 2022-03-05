<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form-check">
            <div class="">
              <h2 class="card-title">Edit Developer</h2>
            </div>
            <div class="">
              <div class="form-group col-md-12">
                  <label for="name">Developer ID</label>
                  <input
                    type="text"
                    class="form-control"
                    id="id"
                    name="id"
                    placeholder="Developer ID"
                    v-model="developer.developerId"
                  />
              
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  v-model="developer.fullname"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  v-model="developer.emailaddress"
                />
              </div>
              <div class="form-group">
                <label for="goals">Goals</label>
                <input
                  type="goals"
                  class="form-control"
                  id="goals"
                  name="goals"
                  placeholder="goals"
                  v-model="developer.goals"
                />
              </div>
              <div class="form-group">
                <label for="Skills">Skills</label>
                <input
                  type="Skills"
                  class="form-control"
                  id="Skills"
                  name="Skills"
                  placeholder="Skills"
                  v-model="developer.skills"
                />
              </div>
              <div class="form-group">
                <label for="linkedin">linkedIn URL</label>
                <input
                  type="linkedin"
                  class="form-control"
                  id="linkedin"
                  name="linkedin"
                  placeholder="linkedin URL"
                  v-model="developer.linkedinurl"
                />
              </div>
              <div class="form-group">
                <label for="Git">Git URL</label>
                <input
                  type="Git"
                  class="form-control"
                  id="Git"
                  name="linkedin"
                  placeholder="Git URL"
                  v-model="developer.githuburl"
                />
              </div>
              <div class="form-group">
                <label for="Image">Image URL</label>
                <input
                  type="text"
                  class="form-control"
                  id="Image"
                  name="Image"
                  placeholder="Image URL"
                  v-model="developer.image"
                />
              </div>
              <button
                type="submit"
                v-on:click="developers"
                class="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "EditDeveloper",

  mounted() {
    this.developer.ids = sessionStorage.getItem("developerid");
    this.editDeveloper(this.developer.ids);
  },
  data() {
    return {
      developer: {
        developerId: "",
        fullname: "",
        emailaddress: "",
        skills: "",
        goals: "",
        linkedinurl: "",
        githuburl: "",
        image: "",
      },
    };
  },
  methods: {
    async editDeveloper(id) {
      await this.$axios
        .get(
          //`https://featured-developers-threeb.herokuapp.com/developers/randomshow`
          "https://featured-developers-threeb.herokuapp.com/developers/getbyId/" +
            id
        )
        .then((res) => {
          if (res.status == 200) {
            this.data = res;
          }
        });
      this.developer.fullname = this.data.data.fullName;
      this.developer.developerId = this.data.data.developerId;
      this.developer.skills = this.data.data.skills;
      this.developer.linkedinurl = this.data.data.linkedinurl;
      this.developer.githuburl = this.data.data.githuburl;
      this.developer.image = this.data.data.image;
      this.developer.goals = this.data.data.goals;
      this.developer.emailaddress = this.data.data.emailaddress;
    },

    developers() {
      this.$axios
        .put(
          "https://featured-developers-threeb.herokuapp.com/developers/update/" + this.developer.developerId,  
          this.developer
        )
        .then((res) => {
          if (res.status == 200) {
            this.$router.push("/developers");
          }
        });
    },
    },
  };

</script>