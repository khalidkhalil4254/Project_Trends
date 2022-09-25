<template>
    <section class="titlebar_container">
        {{pageTitle}}
    </section>
</template>

<script lang="ts">
    import { useStore ,mapState ,mapActions ,mapGetters ,mapMutations} from "vuex";
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'title_bar',
        components: {},
        computed:{
            ...mapState([
                'pageTitle',
            ]),
        },
        data(){
            return{
                
            }
        }
});

</script>

<style scoped>
    .titlebar_container{
        background: rgb(25, 118, 210);
        width: 100%;
        height: 8.5vh;
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
   

</style>