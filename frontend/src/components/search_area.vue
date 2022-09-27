<template>
    <div class="search_container">
        <select v-model="trendCountry" @click="updateCountry(trendCountry)" id="countries">
            <optgroup>
                <option value="Egypt" class="select_option">Egypt</option>
                <option value="UAE" class="select_option">UAE</option>
                <option value="Kawait" class="select_option">Kawait</option>
                <option value="Qatar" class="select_option">Qatar</option>
                <option value="Saudi Arabia" class="select_option">Saudi Arabia</option>
            </optgroup>
          </select>
            <input v-model="trendDate" @input="updateDate(trendDate)" id="date_input" type="date"  min="2020-01-01" max="2022-12-31" placeholder="Date">
            <button @click="getTrends" id="search_button">SEARCH</button> 
        </div>       

</template>

<script lang="ts">
import { mapState ,mapActions ,mapGetters ,mapMutations } from "vuex";
import  { defineComponent } from 'vue'
export default defineComponent({
    name:'search_area',
    components: {},
    computed:{
            ...mapState([
                'pageTitle','allTrends','country','date'
            ]),

        },
    data(){
        return{
            maxDate:new Date(),
            trendCountry:"",
            trendDate:"",
            options:[
                {value:"Egypt"},
                {value:"UAE"},
                {value:"Kawait"},
                {value:"Qatar"},
                {value:"Saudi Arabia"},
            ]
        }
    },
    methods:{
            ...mapMutations([
                'updateTrends','updateCountry','updateDate','setEachTrendArray'
            ]),
            ...mapActions([
                'getTrends'
            ]),
            ...mapGetters([
                'getEachTrends','getEachTrend'
            ])
        
    },
})
</script>

<style scoped>

.search_container{
    width: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
}

#countries{
    width: 70%;
    height: 6vh;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 0.4vw;
    font-size: 18px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}

#countries:hover{
    cursor: pointer;
}

#date_input{
    margin-top: 2.5vh;
    width: 69.8%;
    height: 6vh;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 0.4vw;
    font-size: 18px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}

#date_input:hover{
    cursor: text;
}

#search_button{
    width: 70%;
    height: 6vh;
    margin-top: 2vh;
    border: 1px solid rgb(79, 167, 255);
    border-radius: 0.4vw;
    background-color: transparent;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: rgb(25, 118, 210);
    font-size: 15px;
}

#search_button:hover{
    background-color: rgba(221, 239, 255, 0.322);
    border: 1.5px solid rgb(0, 82, 165);
    cursor: pointer;
}

#search_button:active{
    background-color: rgb(221, 239, 255);
    cursor: pointer;
}

#countries .select_option{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: rgb(62, 62, 62);
    font-size: 18px;
}

option{
    border-radius: 1vw;
}



</style>