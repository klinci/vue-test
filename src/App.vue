<template>
  <div id="app">
    <!-- navbar navbar-dark bg-dark -->
    <nav class="navbar navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">VueCLI</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- collapse navbar-collapse -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <!-- Home-->
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <!-- ./Home -->

          <!-- Attachment-->
          <li class="nav-item active">
            <router-link class="nav-link" to="/attachment">Attachment</router-link>
          </li>
          <!-- ./Attachment -->

        </ul>
      </div>
      <!-- ./collapse navbar-collapse -->
    </nav>
    <!-- ./navbar navbar-dark bg-dark -->
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      outline:none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .nav-link:focus {
    outline:none;
  }
  .nav-link:hover {
    background-color:#2c3e50;
  }
</style>
