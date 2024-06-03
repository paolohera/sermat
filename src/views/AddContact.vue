<template>
  
  <div class="container">
    <router-link to="/dashboard" class="home-button">Home</router-link>
    <h1>Add New Contact</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-danger" mt-4 v-if="errors.length">
        <ul class="mb-0">
          <li v-for="(error, index) in errors" :key="index">
            {{ errors }}
            </li>
        </ul>
        </div>
        <form @submit.prevent="saveContact" novalidate>
          <fieldset>
            <div class="form-group">
              <label class="form-label mt-4">Name: </label>
              <input type="text" class="form-control" v-model="contact.name"
              placeholder="Enter Name">
            </div>
            <div class="form-group">
              <label class="form-label mt-4">Email:</label>
              <input type="text" class="form-control" v-model="contact.email"
              placeholder="Enter Email">
            </div>
            <div class="form-group">
              <label class="form-label mt-4">Designation:</label>
              <input type="text" class="form-control" v-model="contact.designation"
              placeholder="Enter Designation">
            </div>
            <div class="form-group">
              <label class="form-label mt-4">Contact_Number</label>
              <input type="text" class="form-control" v-model="contact.contact_no"
              placeholder="Enter Contact_Number">
            </div>
            <button class="btn btn-primary mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddContact',
  data() {
    return {
      contact: {},
      name: '',
      email: '',
      designation: '',
      contact_no: '',
      errors: [],
    }
  },
  methods: {
    async saveContact() {
      this.errors = [];
      if (!this.contact.name) {
        this.errors.push('Name is required');
      }
      if (!this.contact.email) {
        this.errors.push('Email is required');
      }
      if (!this.contact.designation) {
        this.errors.push('Designation is required');
      }
      if (!this.contact.contact_no) {
        this.errors.push('Contact No. is required');
      }
      if(!this.errors.length) {
        let formData = new FormData();
        formData.append('name', this.contact.name);
        formData.append('email', this.contact.email);
        formData.append('designation', this.contact.designation);
        formData.append('contact_no', this.contact.contact_no);
        let url = 'http://127.0.0.1:8000/api/save_contact'
        await axios.post(url, formData).then(response => {
          console.log(response.data);
          if(response.status == 200) {
            this.contact.name = '';
            this.contact.email = '';
            this.contact.designation = '';
            this.contact.contact_no = '';
            alert(response.data.message);
          } else {
            console.log('Error saving contact');
          }
        }).catch(error => {
          this.errors.push(error.response);
        })
      }
    }
  }
  
}
</script>

<style scoped>
.container {
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}
.home-button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
.home-button:hover {
  background-color: #0056b3;
}
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
  padding: 10px;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.form-label {
  font-weight: bold;
  color: #555;
}
.form-control {
  width: 100%;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: #0056b3;
}
</style>
