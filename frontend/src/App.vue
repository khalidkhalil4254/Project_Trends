<template>

    <titlebar/>
    <div class="main_container">
      <searchArea id="searchArea"/>
      <trendPerHour id="trend"/>
    </div>

   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import titlebar from './components/titlebar.vue';
import searchArea from './components/search_area.vue';
import trendPerHour from './components/trendPerHour.vue';

export default defineComponent({
  name: 'App',
  components: {
    titlebar,searchArea,trendPerHour,
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

</style>
