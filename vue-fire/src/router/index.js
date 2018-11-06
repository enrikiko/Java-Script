import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Experience',name: 'Experience',component: Experience},
    {path: '/',name: 'Experience',component: Experience},
    {path: '/Education',name: 'Education',component: Education},
    {path: '/about',name: 'About',component: About},
    {path: '/projects',name: 'Projects',component: Projects},
  ]
})
