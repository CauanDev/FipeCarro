<template>
<h1>Oiee</h1>
<p>{{loading?"Carregando...":"Finalizado"}}</p>
<ColorPicker v-model="color" />

</template>
<script>
import { GoogleGenerativeAI } from "@google/generative-ai";
import ColorPicker from 'primevue/colorpicker';

export default {
  components:{ColorPicker},
  data(){
    return{
      loading:false,
      color:null
    }
  },
  methods: {
    async getResposta() {
      this.loading = true

      const genAI = new GoogleGenerativeAI('AIzaSyB32roXGj-w8pLaLUB3SzvZzvsMfA0DBIQ');
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Me mande um json que contem os defeitos do veículo VW - VolksWagen up! black/white/red I MOTION 1.0 Flex 5p  SOMENTE O JSON E SEM OBSERVAÇÃO, o json devera conter o defeito e a solução e o nivel de problema, se é crítico ou não";

      const result = await model.generateContent(prompt);
      console.log(JSON.parse(result.response.text().replaceAll('`','').replace('json','')));
      this.loading = false

    }
  },
  mounted(){
    this.getResposta()
  }
}


</script>
