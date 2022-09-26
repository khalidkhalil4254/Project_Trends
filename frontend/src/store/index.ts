import { createStore } from 'vuex'
import trend_Interface from './trendInterface';
import axios from 'axios';



export default createStore({
  state: {
    //adding shared states or data of app here: 
    pageTitle:"Twitter Trends",
    country:"null",
    date:"null",  
    allTrends:[],
  },
  getters: {
    getTrendsIDs(context){
      const IDs:number[]=[];
      context.allTrends.forEach((el:any)=>{
        IDs.push(el._id);
      });
      return IDs;
    },

    getEachTrends(state){
      const res:trend_Interface[]=[];
      state.allTrends.forEach((element:any) => {
          const Names=element.names;
          const Indices=element.indices;
          const Volumes=element.volumes;
      
          const len=Names.length;
      
          for(let x=0;x<len;x++){
              res.push({
                  index:Indices[x],
                  name:Names[x],
                  volume:Volumes[x]
              });
          }
  
      });    
  
      return res;
    },
    
  },
  mutations: {
    //adding methods that changes states in app here:
    updateCountry(state,value){
      state.country=value;
    },
    updateDate(state,value){
      state.date=value;
    },
    updateTrends(state,value){
      state.allTrends=value;
    },
  },
  actions: {
    //adding shared async methods of app here:
    async getTrends(context){
      const data=axios.get(`http://localhost:8100/search?trend_Country=${context.state.country}&trend_Date=${context.state.date}`);
      console.log((await data).data.data);
      context.commit('updateTrends',(await data).data);
      context.commit('setEachTrendArray');
    },


  },
  modules: {
  }
})

