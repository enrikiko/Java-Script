import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Calles from '@/components/Calles'
import PuntosDeInteres from '@/components/PuntosDeInteres'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index',component: Index},
    {path: '/calles', name: 'Calles',component: Calles},
    {path: '/puntosdeinteres', name: 'PuntosDeInteres',component: PuntosDeInteres},
  ]
})
