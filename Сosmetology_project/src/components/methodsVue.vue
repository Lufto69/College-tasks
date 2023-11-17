<template>
    <div class="about_methods">
        <div class="case_methods">
            <h1 class="title_methods">{{ card.name }}</h1>
            <span class="text_methods">{{ card.info }}</span>
        </div>
    </div>
</template>
<script>
import data from '@/data.js'


export default {


    data(){
    return{
        card: data.find((e) => e.id==this.$route.params.id)
    }
    },
}
</script>
