<template>
  <v-container row wrap>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            :src="this.wholeResponse.Poster"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{this.wholeResponse.Title}}</h3>
              <div>{{this.wholeResponse.Plot}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      wholeResponse: []
    }
  },

  mounted () {
    axios
      .get('http://www.omdbapi.com/?t=titanic&apikey=b76b385c&Content-Type=application/json')
      .then(response => (this.wholeResponse = response.data))
  }
}
</script>

<style>

</style>
