import Vue from 'vue';
import Vuex from 'vuex';
import fileUpload from './store/fileUpload';

Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
  	fileUpload
  }
});
