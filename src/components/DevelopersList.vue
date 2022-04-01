<template>
  <div class="page-content page-container" id="page-content">
    <div class="addButton form-row add">
      <button type="button" class="btn btn-primary" @click="addDeveloper">
        Add Developer
      </button>
    </div>
    <h1>Featured Developers List</h1>

    <div class="row">
      <div class="col mb-4" v-for="c in this.data.data" :key="c.developerid">
        <div class="row">
          <div class="card auto">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div>
              <div class="card-block text-center text-white">
                <div>
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                    class="img-radius"
                    alt="User-Profile-Image"
                    height="190"
                    width="190"
                    id="image1"
                  />
                </div>
                <br />
                <i
                  class="
                    mdi mdi-square-edit-outline
                    feather
                    icon-edit
                    m-t-10
                    f-16
                  "
                ></i>
              </div>
              <h5 class="card-title">{{ c.fullname }}</h5>
              <p class="card-text">{{ c.emailaddress }}</p>
              <p class="card-text">{{ c.skills }}</p>
              
              <a slt="link to linkedin" href="" id="linkedIn">{{
                c.linkedinurl
              }}</a>
              <p class="card-text">{{ c.goals }}</p>
              <a slt="link to git" href="link to git" id="git">{{
                c.githuburl
              }}</a>
              <br />
              <font-awesome-icon
                @click="editDeveloper(c.developerId)"
                icon="edit"
              />
              &nbsp;
              <font-awesome-icon
                @click="deleteDeveloper(c.developerId)"
                color="red"
                icon="trash"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#/home">Home</a>
  </div>
</template>
<script>
export default {
  name: "developersList",
  mounted() {
    this.developers();
  },
  data() {
    return {
      data: null,
      developer: {
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
    async developers() {
      await this.$axios
        .get(
          "https://featured-developers-threeb.herokuapp.com/developers/getall"
        )

        .then((res) => {
          if (res.status == 200) {
            this.data = res;

            //for (let r =0; r<length; r++) {
            //console.log("len " + length)
            //console.log(" im2 " + res.data[r].image);
            // document.getElementById("image1").src = res.data[r].image;
            //}
          }
        });
      for (let index = 0; index < this.data.data.length; index++) {
              document.getElementById("image1").src =
                this.data.data[index].image;
              console.log("index " + index);
              console.log("img " + document.getElementById("image1").src) 
              console.log(index + " " + this.data.data[index].image);
              console.log(index + " " + JSON.stringify(this.data.data[index]));
            }
      console.log("image " + this.data.data.image);
      console.log("image " + this.data.data.githuburl);
    },

    async deleteDeveloper(id) {
      await this.$axios
        .delete(
          `https://featured-developers-threeb.herokuapp.com/developers/delete/${id}`
        )
        .then((res) => {
          if (res.status == 200) {
            this.developers();
          }
        });
    },

    async addDeveloper() {
      //window.location.href = `#/CreateDeveloper`;
      window.location.href = `https://featureddeveloper.herokuapp.com/#/CreateDeveloper`;
    },

    async editDeveloper(id) {
      window.sessionStorage.setItem("developerid", id);
      window.location.href = `#/EditDeveloper/${id}`;
      //window.location.href = `https://featureddeveloper.herokuapp.com/#/EditDeveloper/${id}`;
    },
  },
};
</script>
<style>
.h1 {
  text-align: center;
  color: black;
  top: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
}
.header {
  height: 90px;
  width: 100%;
  border: 1px solid #4caf50;
  background-color: #006747;
}
.add {
  float: right;
}
.fai {
  width: 100%;
}
</style>