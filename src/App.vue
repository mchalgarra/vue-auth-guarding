<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text to="/">
        <v-icon>mdi-home</v-icon>
        <span class="ml-2">Home</span>
      </v-btn>

      <v-btn text to="/admin">
        <v-icon>mdi-shield-account</v-icon>
        <span class="ml-2">Admin</span>
      </v-btn>

      <v-btn text to="/dashboard">
        <v-icon>mdi-view-dashboard</v-icon>
        <span class="ml-2">Dashboard</span>
      </v-btn>

      <v-btn text to="/profile">
        <v-icon>mdi-account</v-icon>
        <span class="ml-2">Profile</span>
      </v-btn>

      <v-btn text to="/about">
        <v-icon>mdi-information</v-icon>
        <span class="ml-2">About</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text @click="auth()">
        <span class="mr-2">Sign {{ authenticated ? "Out" : "In" }}</span>
        <v-icon>{{ authenticated ? "mdi-logout" : "mdi-login" }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  computed: {
    authenticated() {
      return this.$store.getters.authenticated
    },
  },

  methods: {
    auth() {
      if (this.authenticated) {
        return this.$store.dispatch("signOut")
      }

      this.$router.push("/auth")
    },
  },
}
</script>
