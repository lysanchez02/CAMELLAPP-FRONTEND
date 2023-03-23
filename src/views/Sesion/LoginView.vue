<template>
  <div><NavBarLogin/>
      <div class="row">
       <div class="container"><br>
        <div class="container col-4">
          <div class="d-flex"><h1 class="m-5"><strong>!Bienvenido¡</strong></h1></div><br>
           <input class="form-control m-2" type="email" placeholder="Usuario"><br>
           <input class="form-control m-2" type="password" placeholder="Contraseña"><br>
           <b-button href="" class="mb-2" variant="info">Iniciar Sesion</b-button><br><br>
           <a href="./RegistroView" class="px-4">No tienes cuenta?</a>
           <a href="" class="px-4">Olvidaste tu contraseña?</a><br><br>
        </div>
       </div>
      </div>
  
  </div></template>
  <script>
  import NavBarLogin from '@/components/NavBarLogin.vue';
  
  export default{
      return: {},
      components: { NavBarLogin }
  }
  </script>