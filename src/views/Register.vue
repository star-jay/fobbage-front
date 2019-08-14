<template>
  <div class="Register">
    <h1> Register </h1>
    <el-form ref="register-form" @submit.native.prevent="register" :model="form">
      <el-form-item label="Email">
        <el-input v-model="form.email" type=email></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" type=password></el-input>
      </el-form-item>
      <el-form-item label="First Name">
        <el-input v-model="form.first_name"></el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="form.last_name"></el-input>
      </el-form-item>
      <el-button class="button" type="primary"
      :disabled="!formIsComplete" :loading="loading" native-type="submit">
        {{ loading ? 'Loading...' : 'Register' }}
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'register',
  data() {
    return {
      errors: [],
      form: {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: 'authLoading',
    }),
    formIsComplete() {
      return this.form.email && this.form.password && this.form.first_name;
    },
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.form)
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
