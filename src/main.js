import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
// 2. Import VueRouter dependency
import {createRouter, createWebHashHistory} from 'vue-router'

// Routing in Vue
// 3. Import all components to be used
import HomeSection from './components/HomeSection';
import ProgramsSection from './components/ProgramsSection';
import AlumniSection from './components/AlumniSection';
import CoursesSection from './components/CoursesSection';
import StaffSection from './components/StaffSection';

// 4. Routes for navigating front end components / elements
const routes = [
    { path : '/', component : HomeSection},
    { path : '/programs', component : ProgramsSection},
    { path : '/alumni', component : AlumniSection},
    { path : '/courses', component : CoursesSection},
    { path : '/staff', component : StaffSection}
]

// 5. Create Router for the application

const router = createRouter({
    //Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// create a vue application instance
const app = createApp(App)

// register router as a routing middleware
app.use(router)

// mount the app component to the DOM
app.mount('#app')




