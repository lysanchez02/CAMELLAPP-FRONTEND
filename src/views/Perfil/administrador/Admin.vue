<template>
  <div><NavBar/><br>
      <div class="container">
  
  <div class="row">
    <div class="col-3">
      <div>
      <b-card
        no-body
        style="max-width: 20rem;"
        img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177930-stock-illustration-user-icon-in-trendy-flat.jpg"
        img-alt="Image"
        img-top
      >
        <template #header>
          <h4 class="mb-0">Administrador</h4>
        </template>      <b-list-group flush>
          <b-list-group-item button @click="show = 'Perfil'">Ver Perfil</b-list-group-item>
          <b-list-group-item button @click="show = 'ListaEmpleadores'">Empleadores</b-list-group-item>
          <b-list-group-item button @click="show = 'ListaPostulantes'">Postulantes</b-list-group-item>
          <b-list-group-item button @click="show = 'Ofertas'">Ofertas de Empleo</b-list-group-item>
          <b-list-group-item button @click="show = ''">Usuarios Bloqueados</b-list-group-item>
          <b-list-group-item button @click="show = ''">Comentarios</b-list-group-item>
          <b-list-group-item button @click="show = 'Ofertas'"></b-list-group-item>
        </b-list-group> 
        <b-card-body>
          <h6>Contacto:</h6>
          <a href="#" class="card-link">Facebook</a>
          <a href="#" class="card-link">Whatsapp</a>
        </b-card-body>
      </b-card>
    </div>
    </div>
  
  <div class="col-1"></div>
     <div class="col-8">
      <div v-if="show === 'Ofertas'"><OfertasPostulante/></div>
      <div v-if="show === 'Perfil'"><h1>perfil</h1></div>
      <div v-if="show === 'ListaEmpleadores'">
        <div class="row d-flex justify-content-center"> 
          <h2>CAMELLAPP</h2>
          <div class="col-8">
              <b-input-group class="mb-5">
                <template #append>
                  <b-button><b-icon icon="search"></b-icon></b-button>                   
                  </template>
                <b-form-input></b-form-input>
              </b-input-group>
          </div><br>
  <!--start card-->
              <div class="col-6" v-for="empleador in empleador" :key="empleador.id">
              <b-card
              :title="empleador.nombres+' '+empleador.apellidos"
              img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177880-stock-illustration-user-icon-in-trendy-flat.jpg"
              :img-alt=empleador.foto_perfil
              img-top
              tag="article"
              style="max-width: 25rem;"
              >
              {{empleador.nacionalidad}}<br>
              <b-card-text><p>{{empleador.telefono}}</p></b-card-text>
              <b-button href="#" variant="primary" class="m-1">Ver Perfil</b-button>
              <b-button href="#" variant="danger" class="m-1">Eliminar</b-button>
            </b-card><br>
          </div>
  <!--end card-->
    </div>
      </div>
      <div v-if="show === 'ListaPostulantes'"><ListaPostulantes/></div>
     </div>             
  </div>
  </div></div>
  </template>
  <script>   
  export default{
    name:'AdminView',
    data(){
      return{
        empleador:null,
        show:null
      }
    },
    components:{ },
  mounted(){},
  }
  </script>