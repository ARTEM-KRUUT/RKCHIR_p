"use strict";

let result;

// Цикл для вопроса про регистрацию

while(true)
{
    result = prompt("Желаете пройти регистрацию на сайте?");

    if (result == "Да")
    {
        alert("КараганДа! Отлично!");
        break;
    }
    else
    {
        alert("Попробуйте еще раз");
    }
};

// Цикл для прохожденияя регистрации
function Input(){
    let login_ok = false;
    let user_name = "";
    let password = "";

    user_name = prompt("Логин","");
    if (user_name == "Админ")
    {
        password = prompt("Пароль","");
        if (password == "Я главный"){
            alert("Здравствуйте, главный Админ(что??)");
        }
        else if (password == null){
            alert("Отменено");
        }
        else{
            alert("Неверный пароль");
        }
    }
    else if (user_name == "" || user_name == null){
        alert("Отменено");
    }
    else{
        alert("Я вас не знаю");
    }

};



//кнопка лайка
var isCliked = false;
var counters = document.getElementById('count');
var button = document.getElementById('button');
var heart = document.getElementById('heart');

var like_count = Number(counters.textContent);

function draw_cursor (e) {
    heart.style.position = "absolute";
    heart.style.backgroundColor = "transparent"; 
    heart.style.width = "10%";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    let img = heart.cloneNode(true);
    img.removeAttribute('id');
    img.classList.add('fordel');
    document.body.append(img);   
}
function remove_hearts(){//удаляем рисунок
    var del = document.getElementsByClassName('fordel');

    while(del.length > 0 ){
        document.removeEventListener('mousemove', draw_cursor);
        del[0].remove();
    }
}

function btn_clik (){//проверяем нажата ли кнопка
    document.addEventListener('mousemove', draw_cursor);

    if (isCliked){
        isCliked = false;
        like_count -= 1;
        counters.textContent = like_count;

        heart.style.position = "static";
        heart.style.width = "25%";
        heart.style.backgroundColor = "transparent";
        remove_hearts();

        button.classList.remove('clicked');
    }
    else{  
        heart.style.backgroundColor = "#e73c7e";
        button.classList.add('clicked');
        button.style.zIndex = "100"; 
        like_count += 1;
        counters.textContent = like_count;
        isCliked = true;
    }
};



