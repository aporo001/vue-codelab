import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/edit/:photoId',
      name: 'edit',
      component: Edit
    }
  ]
})
