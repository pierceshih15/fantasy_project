import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import SignIn from '@/views/SignIn.vue'

Vue.use(Router)

const router = new Router({

  routes: [{
    path: '/signin',
    name: 'signin',
    component: SignIn
  }, {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }, {
    path: '/league',
    name: 'league',
    component: () => import('@/views/League.vue')
  }, {
    path: '/team',
    name: 'team',
    component: () => import('@/views/Team.vue')
  }, {
    path: '/matchup',
    name: 'matchUp',
    component: () => import('@/views/MatchUp.vue')
  }, {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
  }]
})

export default router