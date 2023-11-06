<template>
    <div class="about_mid_content">
      <router-view name="menu"></router-view>
      <router-view></router-view>
      <div class="conteiner_box">
      <FooterVue/>
      </div>
    </div>    
  </template>
   <style lang="scss">
    .about_mid_content{
      width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    align-items: center;
     justify-content: center;
     .conteiner_box{
      width: 100%;
      display: flex;
      justify-content: center;
     }
    }
  
  </style>
  <script>
  // @ is an alias to /src
  import '@/static/style.scss'
  import FooterVue from '@/components/FooterVue.vue'
  
  export default {
    components: {      
      FooterVue
    }
  }
  </script>