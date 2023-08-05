<template lang="">
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Iqbal</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
            <li class="nav-item">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- navbar-collapse.// -->
      </div>
      <!-- container-fluid.// -->
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Iqbal Hossen</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    });
  },
};
</script>
<style>
/* style nuxt link */
a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

a:hover {
  color: #fff425;
  text-decoration: none;
}
</style>
