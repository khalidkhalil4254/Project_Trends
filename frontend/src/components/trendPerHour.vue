<template>
       <div v-if="country!='null' && date!='null'" class="table_container">

                <!--this is the starting of the table-->
                <table v-for="hour in allTrends" :key="hour">
                    <tr>
                        <th>{{hour._id}}</th>
                    </tr>
                    <tr>
                      <th>index</th>
                      <th>name</th>
                      <th>volume</th>
                    </tr>

                    <tr v-for="trend in getEachTrends.splice(0,50)" :key="trend.index">
                      <td v-if="trend!==''||trend!==null">{{trend.index || "Null"}}</td>
                      <td v-if="trend!==''||trend!==null">{{trend.name || "Null"}}</td>
                      <td v-if="trend!==''||trend!==null">{{trend.volume || "Null"}}</td>
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

</style>