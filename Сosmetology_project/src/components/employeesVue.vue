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
                        <router-link to="concat">
                            <div class="employees_button_box">
                                <button class="employees_button">
                                    <h1 class="employees_button_text">Запись на приём</h1>
                                </button>
                            </div>
                        </router-link> 
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