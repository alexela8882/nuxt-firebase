<template>
  <v-container grid-list-md text-xs-center>
    <div class="d-flex">
      <div class="d-flex ma-3">
        <v-card>
          <v-card-title>
            <v-icon class="mr-12" size="64">
              mdi-heart-pulse
            </v-icon>
            <v-row align="start">
              <div class="caption grey--text text-uppercase">
                Activity
              </div>
              <div>
                <span class="display-2 font-weight-black">
                  98
                </span>
                <strong>MIN</strong>
              </div>
            </v-row>

            <v-spacer></v-spacer>

            <v-btn icon class="align-self-start" size="28">
              <v-icon>mdi-arrow-right-thick</v-icon>
            </v-btn>
          </v-card-title>

          <v-sheet color="transparent">
            <v-sparkline
              :value="value"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
          </v-sheet>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>

const actitivies = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  middleware: ['authenticated'],

  data: () => ({
    width: 2,
    radius: 10,
    padding: 15,
    lineCap: 'round',
    gradient: actitivies[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: 'top',
    actitivies,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
}
</script>
