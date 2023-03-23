<template>
  <div id="app">
     <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">login</router-link>|
      <router-link to="/ContrasenaView">Enviar codigo</router-link> |
      <router-link to="/RecuContraseÑa">Recuperar Contrasena</router-link> |
      
      <router-link to="/PerfilPostulanteView">Perfil Postulante</router-link>   |
      <router-link to="/Experiencia">experiencia</router-link> | 
      <router-link to="/ArchivoPostulanteView">publicar experiencia </router-link> |
      <router-link to="/Vistaoferta">vista oferta p </router-link>|
      <router-link to="/PostulacionesView">Postulaciones</router-link> |

      <router-link to="/PerfilEmpleador">Perfil Empleador</router-link>   |
      <router-link to="/publicarView">publicarOferta</router-link> |  
      <router-link to="/OfertaEmpleo">ofertas empleo</router-link>   |
      <router-link to="/Misofertas">Mis Ofertas</router-link> |
      <router-link to="/Postulantes">postulantes</router-link> |
      <router-link to="/Editaroferta">Editaroferta</router-link> |
      
      <router-link to="/PerfilAdministrador">PerfilAdministrador</router-link>   |
      <router-link to="/AdmisubView">subcategorias</router-link> |
      <router-link to="/Usuarios">Usuarios</router-link> |
   
    </nav>
    <router-view/> 
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
