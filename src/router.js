import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/views/Auth'
import Main from '@/views/Main'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Auth,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('access_token')) {
          next({
            path: '/main'
          });
        } else if (to.hash && localStorage.getItem('state')) {
          const response = to.hash.substring(1, to.hash.length).split('&');
          if (response[3].split('=')[1] === localStorage.getItem('state')) {
            localStorage.setItem('access_token', response[0].split('=')[1]);
            localStorage.setItem('user_id', response[2].split('=')[1]);
            next({
              path: '/main'
            });

          } else {
            next();
          }
        } else {
          next();
        }
        localStorage.removeItem('state');
      }
    },
    {
      path: '/main',
      component: Main,
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('access_token')) {
            next({
                path: '/'
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
