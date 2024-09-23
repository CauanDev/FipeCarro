<template>
    <LoadingIcon v-if="loading" />
    <CardView />
    <div>
        <SelectButton v-model="value" :options="['Carro', 'Moto', 'Caminhão']" aria-labelledby="basic" />

        <AutoComplete v-model="marca" optionLabel="nome" dropdown :suggestions="marcas" @complete="searchMarca"
            :disabled="veiculoComplete" placeholder="Digite o nome da Marca" :invalid="invalidMarca">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.nome" :src="slotProps.option.img" class="mr-2" style="width: 35px;" />
                    <div>{{ slotProps.option.nome }}</div>
                </div>
            </template>
        </AutoComplete>

        <AutoComplete v-model="carro" optionLabel="nome" dropdown :suggestions="carros" @complete="searchCarro"
            placeholder="Digite o nome do Carro" :invalid="invalidCarro" :disabled="!marcaComplete" />

        <AutoComplete v-model="ano" optionLabel="nome" dropdown :suggestions="anos" @complete="searchAno"
            placeholder="Digite o ano de Carro" :invalid="invalidAno" :disabled="!carroComplete" />
    </div>
</template>

<script>
import { getJson } from "serpapi";

import CardView from "../Cards/CardView.vue";
import axios from 'axios';
import AutoComplete from 'primevue/autocomplete';
import LoadingIcon from "../Loading/LoadingIcon.vue";
import marcas from '../../assets/marcas.js';
import SelectButton from 'primevue/selectbutton';
import { GoogleGenerativeAI } from "@google/generative-ai";



export default {
    name: "MarcasForms",
    components: { LoadingIcon, CardView, SelectButton },
    data() {
        return {
            loading: false,
            marcas: [],
            marca: null,

            veiculo: null,
            value: null,

            carro: null,
            carros: null,

            ano: null,
            anos: null,

            veiculoComplete: false,
            marcaComplete: false,
            carroComplete: false,

            invalidMarca: false,
            invalidCarro: false,
            invalidAno: false,

            finalCar: null
        };
    },
    watch: {

        value: {
            immediate: true,
            handler(newVal, oldVal) {
                if (!oldVal) {
                    this.marcas = this.marca = this.anos = this.ano = this.carros = this.carro = null;
                    if (this.value == 'Carro') this.veiculo = 'carros';
                    if (this.value == 'Moto') this.veiculo = 'motos';
                    if (this.value == 'Caminhão') this.veiculo = 'caminhoes';
                }
            }
        },

        marca: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal && newVal.codigo) {
                    if (!oldVal || newVal.codigo !== oldVal.codigo) {
                        this.anos = this.ano = this.carros = this.carro = null;
                        this.findCar();
                    }
                }
            }
        },

        carro: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal && newVal.codigo) {
                    if (!oldVal || newVal.codigo !== oldVal.codigo) {
                        this.anos = this.ano = null;
                        this.carroComplete = false;
                        this.findAno();
                    }
                }
            }
        },

        ano: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal && newVal.codigo) {
                    if (!oldVal || newVal.codigo !== oldVal.codigo) {
                        this.findFipe();
                    }
                }
            }
        }
    },
    methods: {
        searchMarca($event) {
            const arrayMarcas = this.getMarcasArray();
            this.marcas = arrayMarcas.filter((marca) => {
                return marca.nome.toLowerCase().includes($event.query.toLowerCase());
            });
            this.invalidMarca = this.marcas.length === 0;
        },

        searchCarro($event) {
            this.carros = this.carros.filter((carro) => {
                return carro.nome.toLowerCase().includes($event.query.toLowerCase());
            });
            this.invalidCarro = this.carros.length === 0;
        },

        searchAno($event) {
            this.anos = this.anos.filter((ano) => {
                return ano.nome.toLowerCase().includes($event.query.toLowerCase());
            });
            this.invalidAno = this.carros.length === 0;
        },

        getMarcasArray() {
            switch (this.value) {
                case 'Carro':
                    return marcas.marcasCarros;
                case 'Moto':
                    return marcas.marcasMotos;
                case 'Caminhão':
                    return marcas.marcasCaminhoes;
                default:
                    return [];
            }
        },

        findCar() {
            this.loading = true;
            const arrayMarcas = this.getMarcasArray();



            if (this.marca && this.marca.codigo) {
                const url = `https://parallelum.com.br/fipe/api/v1/${this.veiculo}/marcas/${this.marca.codigo}/modelos`;
                axios.get(url)
                    .then(response => {
                        this.marcaComplete = true;
                        this.carros = response.data.modelos;
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a requisição:', error);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.loading = false;
            }
        },

        findAno() {
            this.loading = true;
            const arrayMarcas = this.getMarcasArray();
            if (this.marca && this.marca.codigo) {
                const url = `https://parallelum.com.br/fipe/api/v1/${this.veiculo}/marcas/${this.marca.codigo}/modelos/${this.carro.codigo}/anos`;
                axios.get(url)
                    .then(response => {
                        this.carroComplete = true;
                        this.anos = response.data;
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a requisição:', error);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.loading = false;
            }
        },

        findFipe() {
            if (this.marca && this.marca.codigo && this.carro && this.carro.codigo) {
                const url = `https://parallelum.com.br/fipe/api/v1/${this.veiculo}/marcas/${this.marca.codigo}/modelos/${this.carro.codigo}/anos/${this.ano.codigo}`;
                axios.get(url)
                    .then(response => {
                        this.finalCar = response.data;
                        console.log(response.data)
                        this.getResposta();
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a requisição:', error);
                    });
            }
        },
        async getResposta() {
            this.loading = true

            const genAI = new GoogleGenerativeAI('AIzaSyB32roXGj-w8pLaLUB3SzvZzvsMfA0DBIQ');
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `Me mande um json que contem os defeitos do veículo ${this.finalCar.Modelo}  SOMENTE O JSON E SEM OBSERVAÇÃO, o json devera conter o defeito e a solução e o nivel de problema, se é crítico ou não`;


            const result = await model.generateContent(prompt);
            this.finalCar.problemas = JSON.parse(result.response.text().replaceAll('`', '').replace('json', ''));
            this.fetchData();

        },

        async fetchData() {
            console.log(this.finalCar);
            try {
                const response = await getJson({
                    engine: "google",
                    api_key: '6fde43a0733bb4579dde6b789de2398b16415eab68ef33abb1b144932de4eac8',
                    q: this.finalCar.Modelo || "coffee", // Usando a propriedade se disponível
                    location: "Austin, Texas",
                });
                console.log(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

    },
}
</script>
