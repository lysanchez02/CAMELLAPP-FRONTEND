<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div>
           <Col_Postulante/>
          </div>
        </div>
        <div class="col-9">
          <div>
            <div class="container">
              <div class="row">

                <b-card>
                  <template #header>

                    <br> <br>
                    <div class="row d-flex">
                      <div>
                        <!-- Styled -->
                        <b-form-file v-model="archivo" placeholder="elija el archivo que desea subir"></b-form-file><br>

                      </div>


                      <div class="row d-flex">
                        <div class="col-6">
                          <b-card-img
                            src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png"
                            img-top class="w-10"></b-card-img>
                        </div>
                        
                      
                        <div class="col-6">
                        <b-card-img
                          src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png" img-top
                          class="w-10"></b-card-img>
                      
                      </div>
                      </div>
                      
                    </div>

                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">Titulo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="titulo">
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">Descripcion</label>
                      </div>
                      <div class="col-8">
                        <b-form-textarea placeholder="se permite al menos 500 caracteres" rows="3"> </b-form-textarea>
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">duracion del trabajo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="duracion">
                      </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                      <div class="col-4">
                        <label for="">lugar del trabajo</label>
                      </div>
                      <div class="col-8">
                        <input class="from_control" placeholder="ubicacion">
                      </div>
                    </div>
                    <br>
                  </template>
                  <b-button href="#" variant="primary" class="m-1"><b-icon icon="check2"></b-icon>Agregar experiencia</b-button>
                  <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
                </b-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-8">
          <div v-if="show === 'EditarPerfil'">
            <EditarPerfil />
          </div>
          <div v-else-if="show === 'MisEmpleos'">
            <OfertasEmpleador />
          </div>
          <div v-else-if="show === 'PublicarView'">
            <PublicarView />
          </div>
          <div v-else-if="show === 'ListaPostulantes'">
            <ListaPostulantes />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Col_Postulante from '@/components/col_Postulante.vue';

export default {
  name: 'PerfilEmpleador',

  data() {
    return {
      
    }
  },
  components: {
    Col_Postulante
},
  computed: {
    },
}
</script>