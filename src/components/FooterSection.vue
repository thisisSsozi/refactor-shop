<template>
  <div>
    <div class="bg-dark fixed-bottom">
      <div class="container">
        <footer class="footer bg-dark py-1 my-1">
          <ul class="nav justify-content-center border-bottom pb-1 mb-1">
            <li class="nav-item">
                <router-link to="/">
              <a class="nav-link px-2 text-light">Home</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/programs">
              <a class="nav-link px-2 text-light">Programs</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/courses">
              <a class="nav-link px-2 text-light">Courses</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/alumni">
              <a  class="nav-link px-2 text-light">Alumni</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/staff">
              <a class="nav-link px-2 text-light">Staff</a></router-link>
            </li>
          </ul>
          <p class="text-center text-muted">Refactory &copy; 2022</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style></style>
