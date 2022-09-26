<template>
       <div v-if="country!='null' && date!='null'" class="table_container">

                <!--this is the starting of the table-->
                <table class="table" v-for="hour in allTrends" :key="hour">
                    <tr class="hour_container">
                        <th class="hour"></th>
                        <th class="hour">{{hour._id}}:00</th>
                        <th class="hour"></th>
                    </tr>
                    <tr class="header_row">
                      <td>index     |   </td>
                      <td>name      |   </td>
                      <td>volume    |   </td>
                    </tr>

                    <tr class="table_row" v-for="trend in getEachTrends.splice(0,50)" :key="trend.index">
                      <td class="record" v-if="trend!==''||trend!==null">{{trend.index || "Null"}}</td>
                      <td class="record" v-if="trend!==''||trend!==null">{{trend.name || "Null"}}</td>
                      <td class="record" v-if="trend!==''||trend!==null">{{trend.volume || "Null"}}</td>
                    </tr>

                  </table>
                <!--this is the ending of the table-->





            </div>

</template>

<script lang="ts">
import { mapState ,mapActions ,mapGetters ,mapMutations } from "vuex";
import { defineComponent } from 'vue'
export default defineComponent({
    name:'trendPerHour',
    components:{},
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
                'getEachTrends'
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