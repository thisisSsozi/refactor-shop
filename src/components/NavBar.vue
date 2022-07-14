<template>
    <div class="nav-body">
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <!-- Use the global router link to create links -->
                <router-link to="/">
                    <a class="nav-link active" aria-current="page">Home</a>
                </router-link>
                <router-link to="/programs">
                    <a class="nav-link" aria-current="page">Programs</a>
                </router-link>
                <router-link to="/courses">
                    <a class="nav-link" aria-current="page">Courses</a>
                </router-link>
                <router-link to="/alumni">
                    <a class="nav-link" aria-current="page">Alumni</a>
                </router-link>
                <router-link to="/staff">
                    <a class="nav-link" aria-current="page">Staff</a>
                </router-link>
                <!-- <a class="nav-link disabled">Disabled</a> -->
            </div>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {},
  methods: {},
  components: {},
};
</script>

<style scoped>
/* css */
.navbar {
    background: rgb(245,246,218);
    background: linear-gradient(90deg, rgba(245,246,218,1) 24%, rgba(221,238,174,1) 61%, rgba(51,85,125,1) 100%);
    }
.navbar-nav {
    font-weight: 900;
    font-family:Verdana, Geneva, Tahoma;
    color : #720e9e;
}
.navbar-brand {
    font-weight: bolder;
    font-family:Verdana, Geneva, Tahoma;
    color: #4B0082;
}
.nav-body{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);

}
</style>
