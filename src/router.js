import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Dashboard from './components/dashboard.vue';
import Register from './components/Register.vue';
import Home from './views/Home.vue';
import AddContact from './views/AddContact.vue';
import EditContact from './views/EditContact.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home', // Change path to '/home' to avoid conflict
    name: 'Home',
    component: Home
  },
  {
    path: '/add-contact',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contact/edit/:id?',
    name: 'EditContact',
    component: EditContact
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
