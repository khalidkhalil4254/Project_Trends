<template>
       <div v-if="country!=null && date!=null" class="table_container">

                <!--this is the starting of the table-->
                <table class="table" v-for="trend in allTrends" :key="trend._id">
                    <tr class="hour_container">
                        <th class="hour"></th>
                        <th class="hour">{{trend._id}}:00</th>
                        <th class="hour"></th>
                    </tr>
                    <tr class="header_row">
                      <td>index     |   </td>
                      <td>name      |   </td>
                      <td>volume    |   </td>
                    </tr>

                    <trendRow :trendsInHour="trend.trendsPerHour"/>

                  </table>
                <!--this is the ending of the table-->


            </div>

</template>

<script lang="ts">
import { mapState ,mapActions ,mapGetters ,mapMutations } from "vuex";
import trendRow from './trend_row.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    name:'trendPerHour',
    components:{trendRow},
    data(){
        return{
            startEl:0,
            countELements:10,
        }
        
       },
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