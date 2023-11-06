<template>      
<div class="app">
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
  width: 100%;
}
.content_box{
  display: flex;
  justify-content: center;
}
.content{
  width: 100%;
}
</style>
