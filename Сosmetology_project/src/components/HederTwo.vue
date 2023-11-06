<template>
    <div class="about_head_two">
        <div class="case_about_head">
        <div class="top_head">
            <router-link to="/"> 
                <div class="Logo_name">                    
                    <img src="" width="62px" height="62px" class="img">
                    <h1 class="name">Студия красоты Курбановой Асият</h1>                    
                </div>
            </router-link>
            <h1 class="contact">+7 906 142 60 10</h1>
        </div>
        <div class="Menu">
            <router-link to="servises">   <h1 class="item_menu">Услуги</h1></router-link> 
          <router-link to="employees">   <h1 class="item_menu">Сотрудники</h1></router-link>
          <router-link to="methods">   <h1 class="item_menu">Методики</h1></router-link>
          <router-link to="price">   <h1 class="item_menu">Цены</h1></router-link>
          <router-link to="concat">   <h1 class="item_menu">Контакты</h1></router-link>
        </div>
        </div>
    </div>
</template>
<style lang="scss">
.about_head_two{
    width: 100%;
    height: 300px;
    background: linear-gradient(101deg, #54A4A4 25.39%, #3B8686 70.53%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .case_about_head{
    width: 100%;
    margin-top: 5px;
    max-width: 1125px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .top_head{
        display: flex;
        justify-content: space-between;
        margin: 50px 60px 0px 60px;
        .Logo_name{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .name{
                font-size: 24px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                color: #FFF;
                margin-left: 30px;
            }
        }
        .contact{
            color: #FFF;
            font-size: 24px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            align-items: center;
            display: flex;
        }
    }
    .Menu{
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        .item_menu{
            color: #FFF;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
}
}

</style>