<template>
  <div class="page-content page-container" id="page-content">
    <h1>Featured Developers List</h1>
    <div class="addButton">
      <!--    <font-awesome-icon color="blue" icon="plus" /> -->
    </div>
    <div>
      <div v-for="c in this.data.data" :key="c.developerid">
        <div class="row">
          <div class="col mb-4">
            <div class="card auto">
              <!-- <img src="..." class="card-img-top" alt="..."> -->
              <div class="card-body">
                <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        class="img-radius"
                        alt="User-Profile-Image"
                        height="190"
                        width="190"
                        id = "image1"
                      >
                    </div>
                    <br>
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
                <h5 class="card-title">{{c.fullname}}</h5>
                <p class="card-text">{{c.emailaddress}}</p>
                <p class="card-text">{{c.skills}}</p>
                <p class="card-text">Phone</p>
                <a slt="link to linkedin" href="" id="linkedIn">{{
                  c.linkedinurl
                }}</a>
                <p class="card-text">{{c.goals}}</p>
                <a slt="link to git" href="link to git" id="git">{{
                  c.githuburl
                }}</a>
                <br>
                <font-awesome-icon icon="edit" /> &nbsp;
                <font-awesome-icon color="red" icon="trash" />
              </div>
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
    };
  },
  methods: {
    async developers() {
      await this.$axios
        .get(`https://localhost:44312/api/FeaturedDevelopers`)
        //.get(`https://featureddeveloperapis.herokuapp.com/api/DeveloperofTheDay`)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.data = res;
            console.log(this.data.data.length + " is the length");
          }
        });
      // for (let index = 0; index < this.data.data.length; index++) {
      // document.getElementById("image1").src = this.data.data[index].image;
      // }
     
      document.getElementById("linkedIn").href = this.data.data.linkedinurl;
      document.getElementById("git").href = this.data.data.githuburl;
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
</style>