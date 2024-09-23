<template>
<h1>Oiee</h1>
<p>{{loading?"Carregando...":"Finalizado"}}</p>
<MarcasForms/>
</template>
<script>
import MarcasForms from "./components/Forms/MarcasForms.vue"
import { GoogleGenerativeAI } from "@google/generative-ai";
import ColorPicker from 'primevue/colorpicker';


export default {
  components:{ColorPicker,MarcasForms},
  data(){
    return{
      loading:false,
      color:null,
    }
  },
}


</script>
