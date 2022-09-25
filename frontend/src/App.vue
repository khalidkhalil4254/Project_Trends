<template>
    <titlebar/>

    <div class="main_container">
      <searchArea id="searchArea"/>
    </div>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import titlebar from './components/titlebar.vue'
import searchArea from './components/search_area.vue';

export default defineComponent({
  name: 'App',
  components: {
    titlebar,searchArea,
}
});
</script>

<style>
  *{
    margin: 0;
  }

#searchArea{
  position: relative;
  margin-top: 12vh;
  margin-left: 23vw;
}

</style>
