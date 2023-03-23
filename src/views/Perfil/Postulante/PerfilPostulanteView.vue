<template>
  <div>
    <div class="container">
      <NavBarLogin />
      <div class="row">
        <div class="col-3">
          <col_Postulante/>
        </div>

        <div class="col-8">
          <div>
            <div class="container">
              <div class="row">
                <b-card>
                  <template #header>
                    <div class="row">
                      <div class="col-7">
                        <b-card-img
                          src="https://th.bing.com/th/id/R.7f27abb3c1eaa7b8c460a144a32f1c3d?rik=iHENRO5HKygsCw&pid=ImgRaw&r=0"
                          img-top class="w-25">
                        </b-card-img>
                      </div>
                      <div class="col-5">
                        <h4 class="mb-0 m-1">Leyder Yesid Sanchez Benachi</h4>
                        <b-card-img
                          src="https://th.bing.com/th/id/R.ef11358a21182845c7c11c3e9c41b3a0?rik=CTY93EeLjopA6Q&pid=ImgRaw&r=0"
                          img-top class="w-25">

                        </b-card-img>
                        <p>Editar</p>
                      </div>
                      <div class="row d-flex justify-content-center">
                        <div class="col-4 w-50 d-flex justify-content-center"><b-form-rating v-model="value1" show-value
                            variant="warning" class="bg-transparent border-0 m-1"></b-form-rating></div>
                      </div>
                    </div>
                  </template>

                  <b-card-body>
                    <b-card-title>Ayudante Construccion</b-card-title>
                    <b-card-sub-title class="mb-2">Popayan - Cauca</b-card-sub-title>
                  </b-card-body>

                  <b-list-group flush>
                    <b-list-group-item href=""></b-list-group-item>

                    <b-list-group-item href="">datos personales</b-list-group-item>


                    <b-list-group-item href="#"><br>
                      <div class="row d-flex">
                          
                          <div class="col-6">
                            <input id="nombres" class="form-control" type="text" value='' placeholder="Nombres">
                          </div>
  
                         
                          <div class="col-6">
                            <input id="apellidos" class="form-control" type="text" value='' placeholder="Apellidos">
                          </div>
                        </div><br>
                        <div class="row d-flex">
                          
                          <div class="col-12">
                            <input id="documento" class="form-control" type="text" value='' placeholder="Documento">
                          </div>
  
                        </div><br>
                        <div class="row d-flex">
                          <div class="col-12">
                            <input id="celular" class="form-control" type="text" value='' placeholder="Celular">
                          </div>
                        </div><br>
  
                        <div class="row d-flex">
                         
                          <div class="col-12">
                            <input id="correo" class="form-control" type="text" value='' placeholder="Correo">
                          </div>
  
                        </div><br>
                        <div class="row d-flex">
  
                          
                          <div class="col-6">
                            <input id="nacionalidad" class="form-control" type="text" value='' placeholder="Nacionalidad">
                          </div>
                         
                          <div class="col-6">
                            <input id="direccion" class="form-control" type="text" value='' placeholder="Direccion">
                          </div>
  
                        </div><br>
                        <div class="row d-flex">
  
                        
                          <div class="col-12
                          
                          ">
                            <input id="user name" class="form-control" type="text" value='' placeholder="usuario">
                          </div>
                        </div><br>
                     

                    </b-list-group-item><br>

                  </b-list-group>
                  
                  <b-card-footer footer-bg-variant="danger" footer-text-variant="white">Bloquear</b-card-footer>
                  <b-card-footer footer-bg-variant="secondary" footer-text-variant="white">Reportar</b-card-footer>
                </b-card>


              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import NavBarLogin from "@/components/NavBarLogin.vue"
import col_Postulante from "@/components/col_Postulante.vue"
export default {
  name: 'PerfilEmpleador',

  data() {
    return {

    }
  },
  components: {
    NavBarLogin,
    col_Postulante
  },
  computed: {
  },
}
</script>