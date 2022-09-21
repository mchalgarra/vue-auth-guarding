/* eslint-disable no-unused-vars */

import Vue from "vue"
import Vuex from "vuex"
import { UserController } from "../controllers/user.controller"
import { UserEntity } from "../entities/user.entity"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /**
     * @type {UserEntity}
     */
    user: null,

    /**
     * @type {false}
     */
    loading: false,
  },
  getters: {
    authenticated: (state) => {
      return !!state.user
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
    setLoading(state, data) {
      state.loading = data
    },
  },
  actions: {
    async signIn({ commit }, payload) {
      commit("setLoading", true)

      const controller = new UserController()

      const user = await controller.signIn(payload.email, payload.password)

      const userData = await controller.getUser(user.user.uid)
      commit("setUser", userData)

      commit("setLoading", false)
    },

    async signOut({ commit }) {
      commit("setLoading", true)

      const controller = new UserController()
      await controller.signOut()

      commit("setUser", null)

      commit("setLoading", false)
    },
  },
  modules: {},
})
