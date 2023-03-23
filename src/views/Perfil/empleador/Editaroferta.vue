<template>
    <div class="container">
        <NavBarLogin/>
        <div class="row">
            <div class="col-3">
            <col_Empleador/>
            </div>
            <div class="col-9">
                <b-card>
                    <img src="https://help.fromdoppler.com/wp-content/uploads/2016/12/Alto_y_ancho-1024x531.png" alt="" width="70%" height="50%">
                    <b-botton  >editar</b-botton>
                    <br><br>
                    <div class="row d-flex">
                        <div class="col-3">
                            <label for="">Categoria</label>
                        </div>
                        <div class="col-8">
                            <div>
                                <b-form-select v-model="selected" :options="options"></b-form-select>
                                <div class="mt-3"><strong>{{ selected }}</strong></div>
                            </div>
                        </div>
                    </div><br>
                    <div class="row d-flex">
                        <div class="col-3">
                            <label for="">Titulo</label>
                        </div>
                        <div class="col-7">
                            <input class="from_control" placeholder="titulo">
                        </div>
                    </div>
                    
                    
                    <br>
                    <div class="row d-flex">
                        <div class="col-5">
                            <label for="">Descripcion Del Trabajo</label>
                        </div>
                        <div class="col-7">
                            <b-form-textarea placeholder="se permite al menos 500 caracteres" rows="3"> </b-form-textarea>
                        </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                        <div class="col-3">
                            <label for="">Pago</label>
                        </div>
                        <div class="col-7">
                            <input class="from_control" placeholder="$">
                        </div>
                    </div>
                    <br>
                    <div class="row d-flex">
                        <div class="col-3">
                            <label for="">Tipo  de Contracto</label>
                        </div>
                        <div class="col-7">
                            <input class="from_control" placeholder="">
                        </div>
                    </div>
                    <br>

                    <b-button href="#" variant="primary" class="m-1"><b-icon icon="check2"></b-icon> Actualizar
                        Oferta</b-button>
                    <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
                </b-card>

            </div>


        </div>
    </div>
</template>
  
<script>
import NavBarLogin from "@/components/NavBarLogin.vue";
import col_Empleador from "@/components/col_Empleador.vue";
export default {
    name: 'PublicarView',
    data() {

        return {
            selected: null,
        options: [
          { value: null, text: 'Seleccionar Categoria' },
          { value: '', text: 'MAESTRO DE CONSTRUCCION' },
      
        ]
        }
    },
    components: {
     NavBarLogin,
     col_Empleador
    },

}
</script>