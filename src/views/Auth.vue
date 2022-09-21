<template>
  <v-row align="center" justify="center" style="height: 100%">
    <v-card
      outlined
      elevation="0"
      class="pa-8"
      style="border-radius: 1.25rem; width: 24rem"
    >
      <h2 class="ml-4 mb-4">Sign In</h2>

      <v-text-field
        v-model="email"
        label="E-mail"
        prepend-icon="mdi-email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        prepend-icon="mdi-lock"
      ></v-text-field>

      <v-row justify="end" class="mt-4">
        <v-btn
          elevation="0"
          color="primary"
          :loading="loading"
          @click="signIn()"
        >
          SIGN IN
        </v-btn>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "AuthPage",

  data: () => ({
    email: "",
    password: "",
  }),

  computed: {
    loading() {
      return this.$store.state.loading
    },
  },

  methods: {
    async signIn() {
      await this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password,
      })

      console.log(this.$store.state.user)

      this.$router.push("/")
    },
  },
}
</script>

<style></style>
