
<template>
  <div class="container">
    <NavBarLogin />
    <div class="row">
      <div class="col-3">
        <col_Empleador />
      </div>

      <div class="col-9">
        <div class="row">
          <h2>CAMELLAPP</h2>

          <div class="col-8">
            <div>
              <b-input-group>
                <template #append>
                  <b-button><b-icon icon="search"></b-icon></b-button>
                </template>
                <b-form-input></b-form-input>
                <template #prepend>
                  <b-dropdown text="Mas Opciones">
                    <b-dropdown-item button @click="show = 'OfertasEmpleador'">Todas las ofertas</b-dropdown-item>
                    <b-dropdown-item>Mis Ofertas</b-dropdown-item>
                    <b-dropdown-item>Mis Ofertas</b-dropdown-item>
                    <b-dropdown-item>Trabajos Terminados</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-input-group>
            </div>
            <br>
          </div>
          <div class="col-3">
            <b-button variant="success" @click="show = 'PublicarView'" v-b-popover.hover.top="'Publica Un Nuevo Empleo'">
              <b-icon icon="plus">
              </b-icon>Nueva Oferta
            </b-button>
          </div>
        </div>
        <!--aqui termina la barra de busqueda-->
        <br>
        <div>
          <div v-if="show === 'EditarOferta'">
            <EditarOferta />
          </div>
          <div v-if="show === 'PublicarView'">
            <PublicarView />
          </div>
          <div v-if="show === 'OfertasEmpleador'">
            <div class="row d-flex">
              <!--start card-->
              <div v-show="eliminar" class="col-lg-6">
                <b-card title="Ayudante General"
                  img-src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Se requiere ayudante de construccion por 6 meses</b-card-text>
                  <b-card-text>Pago: $1'000.000</b-card-text>
                  <b-button button @click="eliminar = !eliminar" variant="danger" class="m-1"><b-icon
                      icon="trash"></b-icon>Eliminar oferta</b-button>
                  <b-button button @click="show = 'EditarOferta'" variant="primary" class="m-1"><b-icon
                      icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <br>
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Pintor"
                  img-src="https://www.spime.com.co/wp-content/uploads/2021/06/pintura-industrial.png" img-alt="Image"
                  img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Empresa requiere personal para el area de pintura por tiempo indefinido</b-card-text>
                  <b-card-text>Pago: $1'000.000</b-card-text>
                  <b-button button @click="!eliminar" variant="danger" class="m-1"><b-icon icon="trash"></b-icon>Eliminar
                    oferta</b-button>
                  <b-button href="#" variant="primary"><b-icon icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Electricista"
                  img-src="https://electricossuramerica.com/elecsura/wp-content/uploads/2017/06/tipos-de-instalaciones-electricas.jpg"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Se requiere electricista para obra de construccion por 8 meses</b-card-text>
                  <b-card-text>Pago: $2'000.000</b-card-text>
                  <b-button button @click="!eliminar" variant="danger" class="m-1"><b-icon icon="trash"></b-icon>Eliminar
                    oferta</b-button>
                  <b-button href="#" variant="primary"><b-icon icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Soldador"
                  img-src="https://concreacero.com.co/wp-content/uploads/2019/05/concreacero_planta-produccion14.jpg"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Busco soldador para instalar puertas metalicas</b-card-text>
                  <b-card-text>Pago: $80.000 x dia</b-card-text>
                  <b-button href="#" variant="danger" class="m-1"><b-icon icon="trash"></b-icon>Eliminar oferta</b-button>
                  <b-button href="#" variant="primary" class="m-1"><b-icon icon="pencil"></b-icon> Editar
                    oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Plomero" img-src="https://construmaster.com.mx/wp-content/uploads/2021/04/5_plomeria.jpg"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>solicito a una persona para instalar dos baños</b-card-text>
                  <b-card-text>Pago: a convenir</b-card-text>
                  <b-button button @click="show = 'eliminar'" variant="danger" class="m-1"><b-icon
                      icon="trash"></b-icon>Eliminar oferta</b-button>
                  <b-button href="#" variant="primary"><b-icon icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Soldador"
                  img-src="https://img.freepik.com/fotos-premium/trabajador-construccion-soldadura-barras-refuerzo-metal-vertido-cimientos-gente-sincera-real_508835-4417.jpg?w=2000"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Se requiere soldador por tiempo indefinido</b-card-text>
                  <b-card-text>Pago: $1'000.000</b-card-text>
                  <b-button button @click="show = 'eliminar'" variant="danger" class="m-1"><b-icon
                      icon="trash"></b-icon>Eliminar oferta</b-button>
                  <b-button href="#" variant="primary"><b-icon icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Jardinero"
                  img-src="https://img.clasf.co/2019/01/26/servicio-guadaa-podas-tala-y-jardineria-20190126073932.4159630015.jpg"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Necesito un jardinero para cortar el pasto en un lote de 100m2</b-card-text>
                  <b-card-text>Pago: $a convenir</b-card-text>
                  <b-button button @click="show = 'eliminar'" variant="danger" class="m-1"><b-icon
                      icon="trash"></b-icon>Eliminar oferta</b-button>
                  <b-button href="#" variant="primary"><b-icon icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
              <!--start card-->
              <div v-show="eliminar" class="col-6">
                <b-card title="Ayudante General "
                  img-src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                  img-alt="Image" img-top tag="article" style="max-width: 25rem;" class="mb-2 m-1">
                  <b-card-text>Se requieren 5 ayudantes de construccion por 4 meses</b-card-text>
                  <b-card-text>Pago: $1'000.000</b-card-text>
                  <b-button button @click="show = 'eliminar'" variant="danger" class="m-1"><b-icon
                      icon="trash"></b-icon>Eliminar oferta</b-button>
                  <b-button href="#" variant="primary"><b-icon icon="pencil"></b-icon> Editar oferta</b-button>
                </b-card>
              </div>
              <!--end card-->
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLogin from '@/components/NavBarLogin.vue';
import col_Empleador from '@/components/col_Empleador.vue';

export default {
  name: 'OfertaEmpleador',

  data() {
    return {
      nombre: '',
      apellido: '',
      cedula: '',
      correo: '',
      celular: '',
      show: 'MisEmpleos',
      
      eliminar: true,
      options: [
        { value: null, text: 'Tipo de documento' },
        { value: 'a', text: 'Cédula de Ciudadanía' },
        { value: 'b', text: 'Cédula Extranjería' },
        { value: 'c', text: 'PEP' },
        { value: 'd', text: 'Otro', disabled: true }
      ],
      disponibilidad: [
        { value: 'a', text: 'Tiempo Completo' },
        { value: 'b', text: 'Medio Tiempo' },
        { value: 'c', text: 'Por Horas' },
        { value: 'c', text: 'Por Dias' },
        { value: 'd', text: 'Por Contrato' },
        { value: 'e', text: 'A Convenir' },
      ]

    }
  },
  components: {
    NavBarLogin,
    col_Empleador
  },
  computed: {
    nombreState() { return this.nombre.length > 0 ? true : false },
    apellidoState() { return this.apellido.length > 0 ? true : false },
    cedulaState() { return this.cedula.length > 0 ? true : false },
    correoState() { return this.correo.length > 0 ? true : false },
    celularState() { return this.celular.length == 10 ? true : false },
  },
}
</script>