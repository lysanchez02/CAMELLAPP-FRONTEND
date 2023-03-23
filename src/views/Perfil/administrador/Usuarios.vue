
<template>
  <div class="container">
    <NavBarLogin />
    <div class="row ">
      <div class="col-3">
        <col_Administrador />
      </div>

      <div class="col-9">
        <div class="row">
          <h2>Usuarios</h2>

          <div class="col-6 ">

            <h3>Empleador </h3>
            <b-card class="d-flex " bg-variant="white" text-variant="primary" title="" >
              <div class="row d-flex">
                <div class="col-3">
                  <img src="@/assets/logocamellapp.png" alt="" width="60%" height="70%">
                </div>

                <div class="col-4">
                  <b-card-text> jhon edison capote r</b-card-text>
                </div>

                <div class="col-4">
                  <b-button href="#" variant="primary">ver usuario</b-button><br>
                  <b-button href="#" variant="danger">eliminar</b-button>
                </div>

              </div>
           </b-card>
          </div>
          <div class="col-6">
            <h3>Postulante</h3>

            <b-card class="d-flex " bg-variant="white" text-variant="primary" title="" >
              <div class="row d-flex">
              

                <div class="col-3">
                  <img src="@/assets/logocamellapp.png" alt="" width="60%" height="70%">
                </div>

                <div class="col-4">
                  <b-card-text> luis miguel ramirez alzate</b-card-text>
                </div>

                <div class="col-4">
                  <b-button href="#" variant="primary">ver usuario</b-button><br>
                  <b-button href="#" variant="danger">eliminar</b-button>
                </div>

              </div>
           </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>                
<script>
import NavBarLogin from "@/components/NavBarLogin.vue"
import col_Administrador from "@/components/col_Administrador.vue"


export default {
  name: 'usuariosView',
  data() {
    return {

    }
  },
  components: {
    NavBarLogin,
    col_Administrador
  },
  
}
</script>


