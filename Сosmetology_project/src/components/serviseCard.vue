<template>
   <router-link :to="'servises/' + cards_data.id" >
        <div class="servise">
            <img :src=" require('../views/img/' + cards_data.image)"  class="servise_img">
            <div class="servise_text_box">
                <h1 class="servise_text">{{ cards_data.name }}</h1>
            </div>
        </div>
    </router-link> 
</template>
<script>
export default {

    props:{
        cards_data: {
            default(){
            return{}
            }
        }
    },
data(){
    return{}
},

    computed:{}
}
</script>