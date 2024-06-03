<template>
  <div class="dashboard-container">
    <Navbar />
    <h1>Dashboard</h1>
    <h2>Contact List</h2>
    <div class="table-header">
      <router-link to="/add-contact" class="add-contact-btn">Add Contact</router-link>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID:</th>
          <th scope="col">Name:</th>
          <th scope="col">Email:</th>
          <th scope="col">Designation:</th>
          <th scope="col">Contact No.</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id" class="table-secondary">
          <th scope="row">{{ contact.id }}</th>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.designation }}</td>
          <td>{{ contact.Contact_no }}</td>
          <td>
            <router-link :to="{ name: 'EditContact', params: { id: contact.id } }">Edit</router-link>
            <button @click.prevent="deleteContact(contact.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import axios from 'axios';
export default {
  name: 'Contactlist',
  data() {
    return {
      contacts: []
    };
  },
  created() {
    this.getContacts();
  },
  components: {
    Navbar
  },
  methods: {
    async getContacts() {
      let url = 'http://127.0.0.1:8000/api/contacts';
      await axios.get(url).then(response => {
        this.contacts = response.data.contacts;
        console.log(this.contacts);
      }).catch(error => {
        console.log(error);
      });
    },
    async deleteContact(id) {
      let url = `http://127.0.0.1:8000/api/delete_contact/${id}`;
      await axios.delete(url).then(response => {
        if (response.status === 200) {
          alert(response.data.message);
          this.getContacts();
        }
      }).catch(error => {
        console.log(error);
      });
    },
    logout() {
      this.$router.push('/'); // Redirect to the login page after logout
    }
  },
  mounted() {
    console.log('Component mounted.');
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f4f4f9;
}
h1 {
  color: #333;
  text-align: center;
}
h2 {
  color: #555;
  margin-bottom: 20px;
}
.table-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
.add-contact-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  transition: background-color 0.3s ease;
}
.add-contact-btn:hover {
  background-color: #0056b3;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.table th, .table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
.table th {
  background-color: #f2f2f2;
}
.table-hover tbody tr:hover {
  background-color: #e9ecef;
}
.table-secondary {
  background-color: #f9f9f9;
}
button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5px;
}
button:hover {
  background-color: #c82333;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
