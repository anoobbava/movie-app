<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>welcome to single movie component</h2>
          <div>{{singleMovie}}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],

  data () {
    return {
      singleMovie: ''
    }
  },

  mounted () {
    axios
      .get('http://www.omdbapi.com/?apikey=b76b385c&i=tt0209163&Content-Type=application/json')
      .then(response => {
        this.singleMovie = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>

<style>

</style>
