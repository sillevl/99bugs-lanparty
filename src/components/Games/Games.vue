<template>
  <article style="width: 100%">
    <p>Games</p>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs3
              v-for="game in games"
              :key="game.title"
            >
              <v-card>
                <v-card-media
                  :src="game.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="game.title"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <p>23</p>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
  </article>
</template>

<script>
  export default {
    data: () => ({
      games: [
        { title: 'Pre-fab homes', src: '/static/doc-images/cards/house.jpg' },
        { title: 'Favorite road trips', src: '/static/doc-images/cards/road.jpg'},
        { title: 'Best airlines', src: '/static/doc-images/cards/plane.jpg'}
      ]
    })
  }
</script>