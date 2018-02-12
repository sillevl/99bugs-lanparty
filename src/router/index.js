import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Games from '@/components/Games/Games'
import CreateGame from '@/components/Games/CreateGame'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/games',
            name: "Games",
            component: Games
        }
    ]
})