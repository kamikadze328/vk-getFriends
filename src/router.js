import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth'
import Main from '@/views/Main'

Vue.use(Router);
//let urlOnHelios = '/~s264434/cv/';
let urlOnHelios = '/';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: urlOnHelios,
      name: 'auth',
      component: Auth,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('access_token')) {
          next({ name: 'main' });
        } else if (to.hash && localStorage.getItem('state')) {
          const response = to.hash.substring(1, to.hash.length).split('&');
          if (response[3].split('=')[1] === localStorage.getItem('state') && response[0].split('=')[1] !== 'access_denied') {
            localStorage.setItem('access_token', response[0].split('=')[1]);
            localStorage.setItem('user_id', response[2].split('=')[1]);
            next({ name: 'main' });

          } else next({ name: 'auth' });

        } else next();

        localStorage.removeItem('state');
      }
    },
    {
      path: urlOnHelios + 'main',
      name: 'main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: urlOnHelios + '*',
      redirect: urlOnHelios
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('access_token')) {
      next({ name: 'auth' })
    } else next();
  } else next();
});

export default router;
