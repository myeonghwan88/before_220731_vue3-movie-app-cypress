import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash, History
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },

  //pages
  // https://google.com/about
  routes: [
    {
      path: '/', // main page를 뜻함
      component: Home
    },
    {
      path: '/movie/:id', // Movie page를 뜻함
      component: Movie
    },
    {
      path: '/about', // about page를 뜻함
      component: About
    },
    {
      path: '/:NotFound(.*)', // NotFound page
      component: NotFound
    }
  ]
})
