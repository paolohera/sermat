<template>
  <div class="main-container">
  <div class="login-container">
    <h1>Member Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label class="us" for="username">Username</label>
        <br>
        <input 
          type="text"
          id="username"
          v-model="username"
          required
        />
      </div>
      <div class="form-group">
        <label class="pass"for="password">Password</label>
        <br>
        <input
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // Replace with your login logic
      if (this.username === 'admin' && this.password === 'password') {
        alert('Login successful!');
        // Navigate to the dashboard after successful login
        this.$router.push('/dashboard');
      } else {
        alert('Invalid username or password');
      }
    },
  },
};

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/chillight');
.main-container{
  width: 100%;
  height: 100%;
  background-color: rgb(40, 210, 240);
  position: fixed;
  margin: -10px;
}
.login-container{
  height: 60%;
  width: 40%;
  background-color: white; 
  position: fixed;
  text-align: center;
  margin-left: 30%;
  margin-top: 8%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
}
h1{
  font-family: 'Chillight', sans-serif;
  margin-top: 40px;
}
.us{
margin-left: -140px;
position: absolute;
margin-top: 5px;
}
.pass{
  margin-left: -140px;
margin-top: 5px;
position: absolute;
}
input{
  width: 300px;
  height: 30px;
  border-radius: 15px;
  border: 0.5px solid black;
  padding-left: 10px;
  margin-top: 10px;
}
button{
  width: 150px;
  height: 40px;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 15px;
  border: 0.5px solid rgb(253, 252, 252);
  font-family: 'Chillight', sans-serif;
  background-color: rgb(40, 210, 240);
  color: white;
}
</style>
