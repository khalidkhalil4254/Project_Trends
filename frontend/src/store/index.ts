import { createStore } from 'vuex'
import axios from 'axios';



export default createStore({
  state: {
    //adding shared states or data of app here: 
    pageTitle:"Twitter Trends",
    country: null,
    date: null,  
    allTrends:[],
  },
  getters: {
 
    
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

