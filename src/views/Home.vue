<template>
  <div class="home">
    <div style="padding-bottom:170px;"></div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <center>
      <h1 style="font-family: 'Lobster', sans-serif;">
        Vue JS Is Awesome For The Future Javascript
      </h1>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style type="text/css">
  @import url('//fonts.googleapis.com/css?family=Indie+Flower|Lobster|Lato');
</style>
