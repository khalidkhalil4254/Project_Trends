<template>           

    <tr class="table_row" v-for="trend in trendsInHour" :key="trend">
        <td class="record">{{trend.trend_index}}</td>
        <td class="record">{{trend.name}}</td>
        <td class="record">{{trend.tweet_volume}}</td>
    </tr>

</template>

<script lang="ts">
import { mapState ,mapActions ,mapGetters ,mapMutations } from "vuex";
import { defineComponent } from 'vue'
export default defineComponent({
 name:'trend_row',
 components:{},
 data(){
     return{
         startEl:0,
         countELements:10,
     }
     
    },
    props:['trendsInHour'],
    computed:{
     ...mapState([
             'pageTitle','allTrends','country','date'
         ]),
         ...mapGetters([
       
         ])
     }, 
 mehods:{
     ...mapMutations([
             'updateTrends','updateCountry','updateDate','setEachTrendArray'
         ]),
         ...mapActions([
             'getTrends'
         ]),

     }
})
</script>

<style scoped>

    .table_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        margin-bottom: 20vh;
    }

    .table_container .table{
        background: transparent;
        margin-top: 10vh;
    }

    .table_container .table{
        font-family: Roboto, Helvetica, Arial, sans-serif;
        border: 1px solid rgb(224, 224, 224);
        border-radius: 4px;
        width: 32vw;
        padding-bottom: 5vh;
        padding-top: 2vh;
        padding-left: 3vw;
    }

    .table_container .table .header_row{
        font-size: 16px;
        opacity: 0.8;
    }

    .table_container .table .hour_container .hour{
        padding-bottom: 1vw;
    }

    .table_container table tr td{
        padding: 1vh 1vw;
    }

    .table_container table tr td{
        padding: 1vh 1vw;
        
    }

    .table_container .table .header_row{
        border: 1px solid gray;
    }


</style>