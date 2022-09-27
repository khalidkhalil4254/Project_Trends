<template>

  <section class="titlebar_container">
    <p>Twitter Trends</p>
</section> 
  
    <div class="main_container">
      <searchArea id="searchArea"/>
      <trendPerHour id="trend"/>
    </div>

   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import searchArea from './components/search_area.vue';
import trendPerHour from './components/trendPerHour.vue';

export default defineComponent({
  name: 'App',
  components: {
    searchArea,trendPerHour,
},
computed:{
  ...mapGetters(['getEachTrends']),
}
});
</script>

<style>
  *{
    margin: 0;
  }
  body{
    background: rgba(220, 220, 220, 0.089);
  }
.main_container{
  width: 100%;
}
#searchArea{
  position: relative;
  margin-top: 12vh;
  margin-left: 23vw;
}

.titlebar_container{
  background: rgb(25, 118, 210);
  width: 100%;
  height: 8.8vh;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 2.7vh;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
}

.titlebar_container p{
  position: relative;
  right: 40vw;
}

</style>
