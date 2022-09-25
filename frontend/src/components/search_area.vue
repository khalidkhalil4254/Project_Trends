<template>
    <div class="main_container">
        <select name="country" id="countries">
            <option class="select_option" value="Egypt">Egypt</option>
            <option class="select_option" value="UAE">UAE</option>
            <option class="select_option" value="Kawait">Kawait</option>
            <option class="select_option" value="Qatar">Qatar</option>
            <option class="select_option" value="Saudi Arabia">Saudi Arabia</option>
          </select>
            <input id="date_input" type="date" placeholder="Date">
            <button id="search_button">SEARCH</button> 
    </div>
     
</template>

<script lang="ts">
import  { defineComponent } from 'vue'
export default defineComponent({
    name:'search_area',
    components: {}
})
</script>

<style scoped>

.main_container{
    width: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
}

#countries{
    width: 70%;
    height: 6vh;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 0.4vw;
    font-size: 18px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}

#countries:hover{
    cursor: pointer;
}

#date_input{
    margin-top: 2.5vh;
    width: 69.8%;
    height: 6vh;
    border: 1px solid rgb(181, 181, 181);
    border-radius: 0.4vw;
    font-size: 18px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
}

#date_input:hover{
    cursor: text;
}

#search_button{
    width: 70%;
    height: 6vh;
    margin-top: 2vh;
    border: 1px solid rgb(79, 167, 255);
    border-radius: 0.4vw;
    background-color: transparent;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: rgb(25, 118, 210);
    font-size: 15px;
}

#search_button:hover{
    background-color: rgba(221, 239, 255, 0.322);
    border: 1.5px solid rgb(0, 82, 165);
    cursor: pointer;
}

#search_button:active{
    background-color: rgb(221, 239, 255);
    cursor: pointer;
}

#countries .select_option{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: rgb(62, 62, 62);
    font-size: 18px;
}

option{
    border-radius: 1vw;
}



</style>