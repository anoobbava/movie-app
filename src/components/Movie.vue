<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
          color="green">
        </v-progress-circular>
      </div>
  </v-container>

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="singleMovie.Poster"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
              <p>{{ singleMovie.Plot}} </p>
              <h3>Actors:</h3>{{singleMovie.Actors}}
               <h4>Awards:</h4> {{singleMovie.Awards}}
               <p>Genre: {{singleMovie.Genre}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500">
          <v-btn
            slot="activator"
            color="green"
            dark>
            View Ratings
          </v-btn>
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Ratings
            </v-card-title>
            <v-card-text>
              <table style="width:100%" border="1" >
                <tr>
                  <th>Source</th>
                  <th>Ratings</th>
                </tr>
                <tr v-for="(rating,index) in this.ratings" :key="index">
                  <td align="center">{{ratings[index].Source}}</td>
                  <td align="center"><v-rating :half-increments="true" :value="ratings[index].Value"></v-rating></td>
                </tr>
              </table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from '@/services/MovieApi'
export default {
  props: ['id'],

  data () {
    return {
      singleMovie: '',
      dialog: false,
      loading: true,
      ratings: ''
    }
  },

  mounted () {
    movieApi.fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response
        this.ratings = this.singleMovie.Ratings
        this.ratings.forEach(function (element) {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0])
          element.Value = element.Value <= 10 ? element.Value / 2 : element.Value / 20
        }
        )
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
