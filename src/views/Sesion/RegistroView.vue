<template>
  <div>
    <NavBarLogin /><br />
    <div class="container">
      <div class="container col-8">
        <div v-if="registro === 'registro1'">
          <div class="d-flex">
            <h1 class="mt-5"><strong>Registrate</strong></h1>
          </div>
          <div class="d-flex"><h5>! Bienvenido ¡</h5></div>
          <br />
          <div class="row">
            <div class="col-6">
              <input class="form-control" v-model="form.nombres" type="text" placeholder="Nombres" />
            </div>
            <div class="col-6">
              <input class="form-control" v-model="form.apellidos" type="text" placeholder="Apellidos" />
            </div>
          </div>
          <br />
          <div class="row">
            <br />
            <div class="col-6 d-flex justify-content-center">
              <input
                class="form-control"
                v-model="form.telefono"
                type="number"
                placeholder="Numero de Celular"
              /><br />
            </div>
            <div class="col-6 d-flex justify-content-between">
              <input
                class="form-control"
                v-model="form.username"
                type="email"
                placeholder="Correo"
              /><br />
            </div>
          </div>
          <br />
          <input
            class="form-control"
            v-model="form.fotoPerfil"
            type="image"
            src="foto"
            alt="Selecciona una foto de perfil"
          />
          <br />
          <b-button @click="registro = 'registro2'" variant="info"
            >Siguiente</b-button
          >
        </div>
        <div v-else-if="registro === 'registro2'">
          <div class="d-flex">
            <h1 class="mt-5"><strong>Registrate</strong></h1>
          </div>
          <div class="d-flex"><h5>Como podemos encontrarte</h5></div>
          <br />
          <div class="row">
            <div class="col-6">
              <input
                class="form-control"
                v-model="form.nacionalida"
                type="text"
                placeholder="Pais de Origen"
              />
            </div>
            <div class="col-6">
              <input
                class="form-control"
                v-model="form.direccion"
                type="text"
                placeholder="Direccion de Residencia"
              />
            </div>
          </div>
          <br />

          <input
            class="form-control"
            v-model="form.documento"
            type="number"
            placeholder="Numero de Documento"
          />
          <br />
          <div class="d-flex">
            <p>Algunos datos no seran visibles por tu seguridad*</p>
          </div>
          <br />
          <b-button @click="registro = 'registro3'" variant="info"
            >Siguiente</b-button
          >
        </div>
        <div v-else-if="registro === 'registro3'">
          <div class="d-flex">
            <h1 class="mt-5"><strong>Registrate</strong></h1>
          </div>
          <div class="d-flex"><h5>Ya casi terminamos!</h5></div>
          <br />
          <div class="row">
            <div class="col-6 d-flex justify-content-between">
              <h5>Tu Usuario en Camellapp es:</h5>
            </div>
            <div class="col-6 d-flex justify-content-between">
              <h5>User0001</h5>
            </div>
          </div>
          <br />

          <input
            class="form-control"
            v-model="form.pasword"
            type="password"
            placeholder="Contraseña"
          /><br />
          <input
            class="form-control"
            v-model="form.pasword"
            type="password"
            placeholder="Confirma tu Contraseña"
          />
          <br />

          <div class="d-flex justify-content-evenly">
            <b-button
              v-on:click="success()"
              href="/admin"
              variant="info"
              class="m-1"
              ><b-icon icon="search"></b-icon> Busco Empleo</b-button
            >
            <b-button variant="info" class="m-1"
              ><b-icon icon="megaphone"></b-icon> Quiero Publicar Un
              Empleo</b-button
            ><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import NavBarLogin from "@/components/NavBarLogin.vue";
import axios from "axios"
export default {
  name: "RegistroView",

  data() {
    return {
      registro: "registro1",
      form : {
        nombres: null,
        apellidos: null,
        nacionalida: null,
        documento: null,
        fotoPerfil: null,
        telefono: null,
        direccion: null,
        username: null,
        pasword: null
                
       },
    };
  },
  components: { NavBarLogin },
  methods: {
    success() {
      alert("Te has registrado exitosamente!");
    },
    GuardarUsuario(){
    axios.post("http://localhost:4000/guardarUsuario",this.usuario)
    .then((data) => {
      console.log(data);
    }
    )
  }
  },
  
};
</script>
