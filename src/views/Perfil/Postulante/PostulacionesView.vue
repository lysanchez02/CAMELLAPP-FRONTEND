<template >
    <div class="container">
        <NavBarLogin />
        <div class="row">
            <div class="col-3">
                <col_Postulante />
            </div>

            <div class="col-9">
                <h3>Mis Postulaciones</h3>
                <b-card title="Soldador">
                    <div class="row">
                        <div class="col-5">
                            <img src="https://concreacero.com.co/wp-content/uploads/2019/05/concreacero_planta-produccion14.jpg"
                                style="max-width: 25rem; height: 13rem;" class="mb-2 m-1" alt="">
                        </div>

                        <div class="col-7">
                            <b-card-text>Busco soldador para instalar puertas metalicas Técnico en soldadura y fabricación
                                de piezas metálicas
                                Conocimientos en corte y trazado para proceso de soldadura.Ejecutar los procedimientos o
                                procesos de soldadura para la
                                fabricación y reparación de sub-componentes en el taller, garantizando la calidad de las
                                reparaciones realizadas.</b-card-text>
                            <b-card-text>Pago: $80.000 x dia</b-card-text>
                            <b-button href="#" variant="danger" class="m-1"><b-icon icon="trash"></b-icon>Eliminar Postulacion</b-button>
                            <b-button href="#" variant="primary" class="m-1"><b-icon icon="pencil"></b-icon> Ver oferta</b-button>

                                
                        </div>
                    </div>
                    
                </b-card><br>
                <b-card title="carpintero">
                    <div class="row">
                        <div class="col-5">
                            <img src="https://concreacero.com.co/wp-content/uploads/2019/05/concreacero_planta-produccion14.jpg"
                                style="max-width: 25rem; height: 13rem" class="mb-2 m-1" alt="">

                        </div>

                        <div class="col-7">
                            <b-card-text>Busco soldador para instalar puertas metalicas Técnico en soldadura y fabricación
                                de piezas metálicas
                                Conocimientos en corte y trazado para proceso de soldadura.Ejecutar los procedimientos o
                                procesos de soldadura para la
                                fabricación y reparación de sub-componentes en el taller, garantizando la calidad de las
                                reparaciones realizadas.</b-card-text>
                            <b-card-text>Pago: $80.000 x dia</b-card-text>
                            <b-button href="#" variant="danger" class="m-1"><b-icon icon="trash"></b-icon>Eliminar Postulacion</b-button>
                            <b-button href="#" variant="primary" class="m-1"><b-icon icon="pencil"></b-icon> Ver oferta</b-button>

                                
                        </div>
                    </div>
                    
                </b-card>
            </div>


        </div>
    </div>
</template>
<script>
import NavBarLogin from "@/components/NavBarLogin.vue"
import col_Postulante from "@/components/col_Postulante.vue"

export default {
    name: 'PostulacionesView',
    data() {
        return {

        }
    },
    components: {
        NavBarLogin,
        col_Postulante
    },
   
}
</script>

