<template>
    <v-toolbar>
        <v-toolbar-title>
        <router-link to="/" tag="span" style="cursur: pointer">99bugs LAN party</router-link>
        </v-toolbar-title>
        <v-toolbar-side-icon 
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
        ></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
        <v-btn 
        flat
        v-for="item in menuItems" 
        :key="item.title" 
        router 
        :to="item.link">
            <v-icon left>{{ item.icon }}</v-icon>{{ item.title }}
        </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'home', title: 'Home', link: '/' },
        { icon: 'border_color', title: 'Inschrijven', link: '/subscribe' },
        { icon: 'poll', title: 'Games', link: '/games' },
        { icon: 'local_library', title: 'Praktisch', link: '/info' },
        { icon: 'security', title: 'Reglement', link: '/rules' }
      ]
    }
  }
}
</script>