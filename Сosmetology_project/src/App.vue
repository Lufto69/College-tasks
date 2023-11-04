<template>
  
  <div id="app" class="app">   
    <nav class="menu_kek">
      <router-link to="/heder">Шапка</router-link>|
      <router-link to="/footer">Подвал</router-link>|
      <router-link to="/home">Основа</router-link>
    </nav>
    <div class="content_box">
    <router-view class="content"/>
  </div>
  </div>
  
</template>

<style lang="scss">
.app{
  display: flex;
  justify-content: center;
  flex-direction: column;
  widows: 100%;
}
.menu_kek{
  display: flex;
  justify-content: center;
}
.content_box{
  display: flex;
  justify-content: center;
}
.content{
  width: 100%;
}
</style>
