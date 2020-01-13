import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey,
        secondary: colors.blueGrey.darken4,
        accent: '#FF5252',
        error: '#FF5252',
        info: '#FF5252',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
