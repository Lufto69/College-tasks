<template>
    <div class="about_employees">
        <div class="employees_box">
            <div class="employees_box_main">
                <div class="employees_box_img">
                    <img src="../views/img/IMG_4563-719.jpg" alt="" class="employees_img">
                </div>
                <div class="employees_info">
                    <h1 class="employees_name">Курбанова Асият</h1>
                    <div class="schedule_box">
                        <h1 class="schedule">График</h1>
                        <div class="schedule_time_case">
                            <h1 class="schedule_time">
                                <span>Пн-Пт</span>
                                <span>СБ</span>
                                <span>ВС</span>
                            </h1>
                            <h1 class="schedule_time_two">
                                <span>8:00 - 16:00</span>
                                <span>8:00 - 13:00</span>
                                <span>Выходной</span>
                            </h1>
                        </div>
                        <div class="employees_button_box">
                            <button class="employees_button">
                                <h1 class="employees_button_text">Запись на приём</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="employees_specialization">
                <h1 class="specialization">Специализация</h1>
                <h1 class="specialization_main"></h1>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.about_employees{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    max-width: 1125px;
    .employees_box{
        width: 100%;
        display: flex;
        flex-direction: column;
        .employees_box_main{
            width: 100%;
            display: flex;
            .employees_box_img{
                width: 400px;
                height: 500px;
                border-radius: 30px;
                .employees_img{
                    width: auto;
                    height: 500px;
                    border-radius: 5px;
                }
            }
            .employees_info{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .employees_name{
                    color: #000;
                    font-size: 36px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: normal;
                }
                .schedule_box{
                    display: flex;
                    flex-direction: column;
                    .schedule{
                        color: #000;
                        font-size: 36px;
                        font-style: normal;
                        font-weight: 300;
                        line-height: normal;
                    }
                    .schedule_time_case{
                        display: flex;
                        .schedule_time{
                            display: flex;
                            flex-direction: column;
                            color: #000;
                            font-size: 36px;
                            font-style: normal;
                            font-weight: 300;
                            line-height: normal;
                        }
                        .schedule_time_two{
                            display: flex;
                            flex-direction: column;
                            margin-left: 60px;
                            color: #000;
                            font-size: 36px;
                            font-style: normal;
                            font-weight: 300;
                            line-height: normal;
                        }
                    }
                }
                .employees_button_box{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                    .employees_button{
                        width: 300px;
                        height: 70px;
                        border-radius: 30px;
                        background-color:   #45D8EC;
                        border: 0;
                        filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.25));
                        .employees_button_text{
                            color: #000;
                            font-size: 24px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }
                    }
                }
            }
        }
        .employees_specialization{
            margin-top: 80px;
            .specialization{
                color: #000;
                font-size: 40px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
        }
    }
}
</style>