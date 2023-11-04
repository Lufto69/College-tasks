import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '../views/FooterVue'
import HederOne from '../views/HederOne'
import HederTwo from '../views/HederTwo'
import CenterHome from '../views/CenterHome'
import Employees from '../views/employeesVue'
import Services from '../views/servicesVue'
import Price from '../views/priceVue'
import Methods from '../views/methodsVue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
  {
    path: '/heder',
    name: 'heder',
    component: HederOne
  },
  {
    path: '/heder2',
    name: 'heder2',
    component: HederTwo
  },
  {
    path: '/home',
    name: 'home',
    component: CenterHome
  },
  {
    path: '/employees',
    name: 'employees',
    component: Employees
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/price',
    name: 'price',
    component: Price
  },
  {
    path: '/methods',
    name: 'methods',
    component: Methods
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
