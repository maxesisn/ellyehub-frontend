<template>
  <v-app-bar :elevation="1">
    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-img>
      <img src="header_logo.png" alt="Ellye Hub" height="32">
    </v-img>
    <SimpSearchBar />
    <template v-slot:append>
      <v-btn icon="mdi-magnify"></v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    color="#E0F7FA"
    width="180"
    :elevation="2"
    >
    <v-list
      :items="items"
    ></v-list>
    <template v-slot:append>
      <div class="pa-2" align="center">
        Version: 2022/11/7
      </div>
    </template>
  </v-navigation-drawer>

  <Gallery />
</template>

<script lang="ts">
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: '主页',
          value: 'home',
        },
        {
          title: '高级查询',
          value: 'adv_search',
        },
        {
          title: '投稿',
          value: 'submit',
        },
        {
          title: '管理员认证',
          value: 'admin',
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
