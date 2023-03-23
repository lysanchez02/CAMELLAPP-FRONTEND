<template>
    <div class="container">
        <NavBarLogin />
        <div class="row ">
            <div class="col-3">
                <col_Administrador />
            </div>

            <div class="col-9">
                <div class="row">
                    <h2>Categoria</h2>

                    <div class="col-6 ">
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
  name: 'SubcategoriaView',
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