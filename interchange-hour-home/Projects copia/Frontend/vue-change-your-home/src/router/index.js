import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import Forgot from '@/components/Forgot'
import Howworks from '@/components/Howworks'
import Profile from '@/components/Profile'
import Houses from '@/components/Houses'
import House from '@/components/House'
import Chats from '@/components/Chats'
import Chat from '@/components/Chat'
import Pruevas from '@/components/Pruevas'

Vue.use(Router)
Vue.use(VueRouter)

export default new Router({
  routes: [
    {path: '/',name: 'Home',component: Home},
    {path: '/login',name: 'Login',component: Login},
    {path: '/signup',name: 'Signup',component: Signup},
    {path: '/forgotpassword',name: 'Forgot',component: Forgot},
    {path: '/howweworks',name: 'Howworks',component: Howworks},
    {path: '/profile',name: 'Profile',component: Profile, meta: { requiresAuth: true }},
    {path: '/houses',name: 'Houses',component: Houses, meta: { requiresAuth: true }},
    {path: '/house/:placeName',name: 'House',component: House, meta: { requiresAuth: true }},
    {path: '/chats',name: 'Chats',component: Chats, meta: { requiresAuth: true }},
    {path: '/chat',name: 'Chat',component: Chat, meta: { requiresAuth: true }},
    {path: '/pruevas',name: 'Pruevas',component: Pruevas,},
    // {path: '/foo',component: Foo,children: [
    //     {
    //       path: 'bar',
    //       component: Bar,
    //       // a meta field
    //       meta: { requiresAuth: true }
    //     }
    //   ]
    // }
  ]
})
