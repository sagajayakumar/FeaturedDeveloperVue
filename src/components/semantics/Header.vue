<template>
  <div class="header" style="overflow-x: hidden">
    <b-navbar toggleable="lg" class="navbarHeader" fixed>
      <b-navbar-brand
        href="https://www.nwmissouri.edu/"
        class="brand cropped1"
        target="_blank"
        ><img
          src="../../assets/NW-transparent-logo.svg"
          alt="ltc-logo"
          height="70"
      /></b-navbar-brand>
      <div>
        
        <div v-if="!$auth.isAuthenticated && !$auth.loading" class="nav-item"  id="as">
          <button
            id="qsLoginBtn"
            class="btn btn-primary btn-margin"
            @click.prevent="login"
          >
            Login/Signup
          </button>
        </div>

        <div
          
          v-if="$auth.isAuthenticated" id="asd"
        >
          <div class="nav-item">
            <span class="user-info">
              <img
                :src="$auth.user.picture"
                alt="User's profile picture"
                class="nav-user-profile d-inline-block rounded-circle mr-3"
                width="50"
              />
              <h6 class="d-inline-block">{{ $auth.user.name }}</h6>
            </span>
          </div>

          <font-awesome-icon icon="user" class="mr-3" />
          <router-link to="/profile">Profile</router-link>

          <font-awesome-icon icon="power-off" class="mr-3" />
          <a id="qsLogoutBtn" href="#" class @click.prevent="logout">Log out</a>
        </div>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped>
.header {
  top: 0px;
  margin: 0px 0px 0px;
  padding: 0px;
}
.navbarHeader {
  background-color: #006747;
  text-align: left;
  font-weight: bold;
  color: whitesmoke;
}

.brand {
  padding: 0px;
}

#as {
  margin-left: 1050px;
}

#asd {
  margin-left: 900px;
}
</style>