<template>
    <div class="about_Home">
        <div class="main_information_container">
            <div class="box_info_main_container">
                <h1 class="title_info_main">Профессиональный косметолог</h1>
                <ul class="info_main_container">
                    <li class="info_main">Курирование по всем вопросам</li>
                    <li class="info_main">Подбор правильных средств</li>
                    <li class="info_main">Индивидуальный подход</li>
                    <li class="info_main">Опыт в сфере больше 10 лет</li>
                </ul>
            </div>
            <div class="container_img">
                <img src="./img/IMG_4488-644.jpg" class="img_home">
            </div>
        </div>
        <div class="main_information_container">
            <div class="container_img">
                <img src="" class="img_home">
            </div>
            <div class="box_info_main_container">
                <h1 class="title_info_main">Оборудованное помещение</h1>
                <ul class="info_main_container">
                    <li class="info_main">Новейшее оборудование</li>
                    <li class="info_main">Разнообразие процедур</li>
                    <li class="info_main">Широкие возможности </li>
                    <li class="info_main">Доступность </li>
                </ul>
            </div>            
        </div>
        <div class="main_information_container">
            <div class="map_Home">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60598.28863242853!2d50.800099620253185!3d61.66459023934711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f62b36a71ed743%3A0x743826b91a7ef615!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0LDRjdGA0L7Qv9C-0YDRgiDQodGL0LrRgtGL0LLQutCw0YAg0LjQvNC10L3QuCDQny7QkC7QmNGB0YLQvtC80LjQvdCw!5e0!3m2!1sru!2sru!4v1698914882939!5m2!1sru!2sru" width="100%" height="400" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
</template>
<style lang="scss">
.about_Home{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
     max-width: 1125px;
    .main_information_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .box_info_main_container{
            .title_info_main{
                color: #000;
                font-size: 48px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                margin-top: 20px;
            }
            .info_main_container{
                margin: 25px 0px 35px 35px;
                
                .info_main{
                    color: #000;
                    font-size: 36px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 122.4%;
                    
                }
                .info_main::marker{
                    color: #5DA4A4;
                    
                }
            }
        }
        .container_img{
            width:255px;
            height:255px;
            object-fit: cover;
            background-size: cover;
            overflow: hidden;
            display: flex;
            justify-content: center;
            border-radius: 100%;
            .img_home{            
            height: 100%;
            width: auto;
            margin-left: 60px;
            }
        }
        .map_Home{
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>