<template >
    <v-card
    max-width="200"
    class="ma-2"
  >
    <v-img
      :src="img"
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>

  </v-card>
</template>

<script lang="ts">
  export default{
    props: {
      title: String,
      subtitle: String,
      img: String,
    },
  }
</script>