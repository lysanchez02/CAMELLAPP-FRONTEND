<template >
    <div class="container">
        <NavBarLogin />
        <div class="row">
            <div class="col-3">
                <col_Empleador />
            </div>

            <div class="col-9">
                <h3> Mis Ofertas </h3>
                <b-card>
                    <div class="row">
                        <div class="col-5">
                            <img src="https://concreacero.com.co/wp-content/uploads/2019/05/concreacero_planta-produccion14.jpg"
                                style="max-width: 25rem; height: 15rem;" class="mb-2 m-1" alt="">
                        </div>

                        <div class="col-6">
                            <b-card-text>Misión del Cargo: Ejecutar los procedimientos o procesos de soldadura para la
                                fabricación y reparación de sub-componentes en el taller, garantizando la calidad de las
                                reparaciones realizadas.
                                Perfil y requisitos:
                                Formación: Técnico en soldadura y fabricación de piezas metálicas
                                Conocimientos en corte y trazado para proceso de soldadura.
                                Experiencia: Preferiblemente un (01) año de experiencia laboral en cargos similares.
                                Información de la oferta:
                                Ubicación: Soledad
                            </b-card-text>
                            <b-card-text>Pago: $80.000 x dia</b-card-text>
                        </div>
                    </div>
                </b-card><br>
                <h3 class="col-1">postulantes</h3>

                <div>
                    <b-card class="d-flex " bg-variant="white" text-variant="primary" title="">
                        <div class="row d-flex">
                            <div class="col-3">
                                <img src="@/assets/logocamellapp.png" alt="" width="60%" height="70%">
                            </div>

                            <div class="col-8">
                                <b-card-text class="col-5"> Jhon edison capote rojas</b-card-text>
                                <b-card-text> Soldador con mas de 4 años Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nulla distinctio beatae tempore numquam eaque praesentium,    velit, explicabo quam placeat consectetur commodi ab, nostrum laudantium. Incidunt eaque sequi accusamus magni!</b-card-text>
                                <b-button href="#" variant="primary">ver usuario</b-button><br>
                            </div>

                        </div>
                    </b-card>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
import NavBarLogin from "@/components/NavBarLogin.vue"
import col_Empleador from "@/components/col_Empleador.vue"


export default {
    name: 'PostulantesView',
    data() {
        return {

        }
    },
    components: {
        NavBarLogin,
        col_Empleador
    },
    
}
</script>

