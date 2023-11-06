<template>
  <div class="about_mid_content">

    <router-view name="menu"></router-view>
    <router-view></router-view>

    <div class="conteiner_box">
      <FooterVue/>
    </div>
    
  </div>    
</template>

<script>
  import '@/static/style.scss'
  import FooterVue from '@/components/FooterVue.vue'
  
  export default {
    components: {      
      FooterVue
    }
  }
</script>