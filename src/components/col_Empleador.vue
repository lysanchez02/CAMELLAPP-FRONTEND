<template>
    <div class="container">
   
   
       <div>
         <b-card no-body style="max-width: 20rem;"
           img-src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177930-stock-illustration-user-icon-in-trendy-flat.jpg"
           img-alt="Image" img-top>
           <template #header>
             <h4 class="mb-0">CAMELLAPP</h4>
           </template>
           <b-card-body>
             <b-card-title>Empleador</b-card-title>
             <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
             <a href="">Ver mas...</a>
           </b-card-body>
           <b-list-group flush>
             <b-list-group-item button @click="show = ''">Gestionar perfil</b-list-group-item>
             <b-list-group-item button @click="show = ''">Ofertas publicadas</b-list-group-item>
             <b-list-group-item button @click="show = ''">Postulantes</b-list-group-item>
             <b-list-group-item button @click="show = ''">Comentarios</b-list-group-item>
           </b-list-group>
           <b-card-body>
             <h6>Contacto:</h6>
             <a href="#" class="card-link">Facebook</a>
             <a href="#" class="card-link">Whatsapp</a>
   
           </b-card-body>
           <b-card-footer>This is a footer</b-card-footer>
   
               <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
         </b-card>
         
       </div>
     </div>
   
   </template>
   <script>
   export default {
     name: 'PerfilPostulante',
     data() {
       return {
         valueperfil: 5,
         value1: null,
         value2: null,
       }
     },
     components: {
     },
   }
   </script>