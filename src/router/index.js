import Vue from 'vue'
import Router from 'vue-router'
import Burndowns from '@/components/Burndowns'
import Chart from '@/components/Chart'

Vue.use(Router);
Vue.component('chart', Chart);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Burndowns',
      component: Burndowns
    }
  ]
})
