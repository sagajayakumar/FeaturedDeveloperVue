<template>
  <div>
    <b-container fluid>
      <b-row>
        <h1>FEATURED DEVELOPER</h1>
      </b-row>
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-6 col-md-12">
            <div class="card user-card-full">
              <div class="row m-l-0 m-r-0">
                <div class="col-sm-4 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-white">
                    <div class="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        class="img-radius"
                        alt="User-Profile-Image" height="100" width="100"
                      />
                    </div>
                    <h6 class="f-w-600">Hembo Tingor</h6>
                    <p>Web Designer</p>
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
                </div>
                <div class="col-sm-8">
                  <div class="card-block">
                    <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Email</p>
                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Phone</p>
                        <h6 class="text-muted f-w-400">98979989898</h6>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Skills</p>
                        <h6 class="text-muted f-w-400">Java,Vue</h6>
                      </div>
                      <div class="col-sm-6">
                        <p class="m-b-10 f-w-600">Goal</p>
                        <h6 class="text-muted f-w-400">Goal here</h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <a slt="link to git" src="link to git"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#/developersList">View all</a>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.side-nav {
  background-color: white;
  min-height: 90vh;
  padding: 0px;
}

.bg-gray {
  background-color: #eee;
  color: #333;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.h3-dispaly {
  display: flex;
  /* width: 15%; */
}

.padding {
  padding: 3rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 30px;
}

.bg-c-lite-green {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f29263),
    to(#ee5a6f)
  );
  background: linear-gradient(to right, #ee5a6f, #f29263);
}
.card-block {
  padding: 1.25rem;
}
.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>
