<template>
    <div class="about_services">
        <div class="container_servise">
            <servise-card 
            
            class="inport_servise" 
            v-for="card in cards"
            :key="card.id"
            :cards_data="card"
            />
        </div>
    </div>
</template>
<script>
import data from '@/data.js'
import ServiseCard from './serviseCard.vue'


export default {
  components: { ServiseCard },

    data(){
    return{
        cards: data
    }
    },
}

</script>