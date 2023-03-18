
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import route from './modules/route.js'
import spinner from './modules/spinner.js'
import global_overlay from './modules/global-overlay.js'

import { mapState } from 'vuex';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    route,
    spinner,
    global_overlay,
  },
  strict: debug
})
