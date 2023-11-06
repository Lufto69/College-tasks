import Vue from 'vue'
import VueRouter from 'vue-router'
import MidContent from '@/views/MidContent.vue'

import CenterHome from '@/components/CenterHome.vue'
import EmployeesVue from '@/components/employeesVue.vue'
import HedenOne from '@/components/HederOne.vue'
import HedenTwo from '@/components/HederTwo.vue'
import ServicesVue from '@/components/servicesVue.vue'
import PriceVue from '@/components/priceVue.vue'
import MethodsVue from '@/components/methodsVue.vue'
import ContactsVue from '@/components/contactsVue.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MidContent',
    component: MidContent,
    children: [
    
      { path: '', components: {
        default: CenterHome, menu: HedenOne
      }    
    },

      { path: 'employees', components: {
        default: EmployeesVue, menu: HedenTwo
      }
    },

    { path: 'servises', components: {
      default: ServicesVue, menu: HedenTwo
    }
  },

    { path: 'price', components: {
      default: PriceVue, menu: HedenTwo
    }
  },

    { path: 'methods', components: {
    default: MethodsVue, menu: HedenTwo
    }
  },
    { path: 'concat', components: {
    default: ContactsVue, menu: HedenTwo
    }
  }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
