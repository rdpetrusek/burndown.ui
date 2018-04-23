import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Burndowns from '@/components/Burndowns'
import Chart from '@/components/Chart'

Vue.use(Router);
Vue.component('chart', Chart);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Burndowns',
      component: Burndowns
    }
  ]
})
