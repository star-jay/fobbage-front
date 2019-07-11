<template>
  <div class="Login">
    <h1> Login </h1>
    <el-form ref="login-form" @submit.native.prevent="login" :model="form">
      <el-form-item label="username">
        <el-input v-model="form.username" type=username></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" type=password></el-input>
      </el-form-item>
      <el-button class="button" type="primary"
      :disabled="!formIsComplete" :loading="loading" native-type="submit">
        {{ loading ? 'Loading...' : 'Login' }}
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      errors: [],
      form: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: 'authLoading',
    }),
    formIsComplete() {
      return this.form.username && this.form.password;
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          if (error.response) {
            this.errors = error.response.data;
          } else {
            this.errors = { error };
          }
        });
    },
  },
};
</script>
