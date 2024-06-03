<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link to="/dashboard" class="navbar-item">Home</router-link>
      
      <button @click="showLogoutModal" class="btn">Logout</button>  
    </div>
  </nav>
  <div v-if="isLogoutModalVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="hideLogoutModal">&times;</span>
      <p>Are you sure you want to log out?</p>
      <button @click="confirmLogout" class="modal-btn yes">Yes</button>
      <button @click="hideLogoutModal" class="modal-btn no">No</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogoutModalVisible: false
    };
  },
  methods: {
    showLogoutModal() {
      this.isLogoutModalVisible = true;
    },
    hideLogoutModal() {
      this.isLogoutModalVisible = false;
    },
    confirmLogout() {
      this.hideLogoutModal();
      this.$router.push('/'); // Redirect to the login page after logout
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgb(40, 210, 240);
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.navbar-item {
  text-decoration: none;
  color: white;
  margin: 0 15px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  transition: color 0.3s ease;
}
.navbar-item:hover {
  color: #ddd;
}
.btn {
  margin: 0 15px;
  padding: 10px 20px;
  border-radius: 15px;
  border: 0.5px solid white;
  color: white;
  font-family: 'Chillight', sans-serif;
  background-color: red;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn:hover {
  background-color: darkred;
}
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  max-width: 500px;
  text-align: center;
  border-radius: 10px;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-btn {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-family: Arial, sans-serif;
  font-weight: 700;
}
.modal-btn.yes {
  background-color: blue;
}
.modal-btn.no {
  background-color: red;
}
</style>
