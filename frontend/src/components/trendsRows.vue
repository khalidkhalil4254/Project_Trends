<template>
    <div class="row">
        
    </div>
</template>

<script lang="ts">
import { useStore ,mapState ,mapActions ,mapGetters ,mapMutations} from "vuex";
import { defineComponent } from 'vue'
export default defineComponent({
    name:'trendsRows',
    components:{},
    computed:{
            ...mapState([
                'pageTitle',
            ]),
        },
})
</script>

<style scoped>

</style>