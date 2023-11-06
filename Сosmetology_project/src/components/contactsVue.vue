<template>
    <div class="about_contacts">
        <div class="case_contacts">
            <h1 class="tytle_contacts">Контакты</h1>
            <div class="case_contacts_list">
                <h1 class="paragraph">
                    <span>Аадрес:</span>
                    <span>Тел:</span>
                    <span>Email:</span>
                    <span>Watsap: </span>
                </h1>
                <h1 class="meaning">
                    <span>Улица ангельская 9 б</span>
                    <span>+7 906 142 60 10</span>
                    <span>sffffdfsgfsd@mail.ru</span>
                    <span>+7 906 142 60 10</span> 
                </h1>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.about_contacts{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    max-width: 1125px;
    .case_contacts{
        display: flex;
        justify-content: center;
        .tytle_contacts{
            color: #000;
            font-size: 48px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }
        .case_contacts_list{
            display: flex;
            justify-content: space-between;
            .paragraph .meaning{
                color: #000;
                font-size: 36px;
                font-style: normal;
                font-weight: 300;
                line-height: 150.4%;
            }
        }
    }
}
</style>