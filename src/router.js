import Vue from 'vue'
import VueRouter from "vue-router"
import listContact from './components/list-contact'
import contact from './components/contact'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: { name: 'contact' }
    },
    {
        name: 'contact',
        path: '/contact',
        component: listContact
    },
    {
        name: 'contactId',
        path: '/contact/:id',
        component: contact,
        props: true
    },
    {
        path: '*',
        redirect: { name: 'contact' }
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})