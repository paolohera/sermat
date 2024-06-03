<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div class="form-group">
        <label for="password_confirmation">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          v-model="password_confirmation"
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? <router-link to="/">Login</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        let response = await axios.post('http://127.0.0.1:8000/api/register', {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });

        if (response.status === 201) {
          alert('Registration successful!');
          // Clear form fields after successful registration (optional)
          this.username = '';
          this.email = '';
          this.password = '';
          this.password_confirmation = '';
          // Redirect to login page
          this.$router.push('/');
        } else {
          console.log('Error during registration');
        }
      } catch (error) {
        console.error('Registration error:', error);
        if (error.response && error.response.data.errors) {
          alert(Object.values(error.response.data.errors).flat().join('\n'));
        } else {
          alert('An error occurred during registration.');
        }
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
