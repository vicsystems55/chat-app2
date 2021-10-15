import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FullwidthLayout from '../views/layouts/FullwidthLayout.vue'
import DashboardLayout from '../views/layouts/DashboardLayout.vue'
import ChatLayout from '../views/layouts/ChatLayout.vue'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Register from '../views/Register.vue'
import store from '../store'


const routes = [
  {
    path: '/',
    component: ChatLayout,
      children:[
        {
          path: '',
          component: Chat
     
        }
      ]
  },
  {
    path: '/chat',
    component: ChatLayout,
      children:[
        {
          path: '',
          component: Chat,
          beforeEnter: () => {
            // ...
            if (store.state.auth.token) {
              console.log('you can go')
            }else{

              router.push('/login')

            }
      

          }
        }
      ]
  },
  {
    path: '/login',
    component: FullwidthLayout,
      children:[
        {
          path: '',
          component: Login
        }
      ]
  },

  {
    path: '/register',
    component: FullwidthLayout,
      children:[
        {
          path: '',
          component: Register
        }
      ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
