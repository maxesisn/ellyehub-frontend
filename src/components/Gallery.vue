<template>
  <v-container>
    <v-row v-masonry>
      <v-col v-masonry-tile sm="3" md="2" v-for="data in index_data">
        <SingleCard :title="data.title" :subtitle="data.subtitle" :img="data.img" />
      </v-col>
    </v-row>
  </v-container>

</template>

<script lang="ts">
import axios from 'axios'

declare interface IndexData {
  title: string,
  subtitle: string,
  img: string
}

export default {
  props: {
    show_type: {
      type: String,
      default: 'default',
    },
  },
  data: () => ({
    index_data: [] as IndexData[],
  }),
  mounted() {
    this.get_data()
  },
  methods: {
    get_data() {
      // TODO: change to prod url
      axios.get("https://eh.maxng.cc/api/index", { params: { type: this.show_type } }).then((response) => {
        this.index_data = response.data;
      });
    },
  },
}

</script>