import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.darken4,
        secondary: colors.blue,
        accent: '#1E88E5',
        error: '#FF5252',
        info: '#0D47A1',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
