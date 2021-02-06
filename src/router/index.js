import { createRouter, createWebHistory } from 'vue-router'
import { users } from '../assets/users'
import store from '../store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Guide from '../views/Guide.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile/:userId',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if (!user) {
    await store.dispatch('User/setUser', users[0])
  }

  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'Home' }); else next();
})

export default router
