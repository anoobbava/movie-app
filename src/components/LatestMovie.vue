<template>
  <v-container>
    <v-layout row wrap >
      <v-flex v-for="i in 3" :key="`4${i}`">
        <v-card dark color="green" class="mb-2 mr-2">
          <v-card-text>
            {{totalData}}
          </v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <v-card dark color="green" class="mb-2 mr-2">
          <v-card-text>4</v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <v-card dark color="green" class="mb-2 mr-2">
          <v-card-text>4</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return{
        totalData: null
      }
    },

    mounted () {
      axios
      .get('http://www.omdbapi.com/?s=titan&apikey=b76b385c&page=1&type=movie&Content-Type=application/json')
      .then(response => (this.totalData = response))

    },

    computed: {

    },

    methods: {
      
    }
  }
  
</script>

<style>

</style>
