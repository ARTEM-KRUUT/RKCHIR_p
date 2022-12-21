"use strict";


//когда наш HTML полностью загрузился
document.addEventListener('DOMContentLoaded', () => {

    // 1 задание Shop cart

    const shopCart = document.querySelector('.shop__cart');
    const shopCartDelete = shopCart.querySelector('.shop__cart-delete');
    const shopCartChange = shopCart.querySelector('.shop__cart-change');
    const shopCartSortUp = shopCart.querySelector('.shop__cart-sort-up');
    const shopCartSortDown = shopCart.querySelector('.shop__cart-sort-down');
    const shopCartInner = shopCart.querySelector('.shop__cart-inner');
    const shopProducts = [
        'Блокнот',
        'Ручка',
        'Линейка',
        'Кружка',
        'Наклейка',
        'Клавиатура',
        'Мышка',
        'Геймпад'
    ];
    // console.log(shopProducts);
//появление элементов списком из массива который описан выше
    shopProducts.forEach(item => {
        let element = document.createElement('div');
        element.classList.add('shop__cart-item');
        element.textContent = item;
        shopCartInner.append(element);
    });

    // Функция по получению рандомного значения
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Изменение одного из элементов на другой
    shopCartChange.addEventListener('click', () => {
        let newItem = shopProducts[getRandomInt(shopProducts.length)];
        shopProducts[getRandomInt(shopProducts.length)] = newItem;
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });

    });

    // Удаление первого элемента



    shopCartDelete.addEventListener('click', () => {
        if (shopProducts.length!=0){
            shopProducts.splice(0,1);
            shopCart.querySelector('.shop__cart-item').remove();
        }

        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });
    });

    // ------------------------------------------------------


    // 2 Фильтр
    let filt = [];
    let a = document.querySelectorAll('.filt_elm');
    let i=0;
    let j=0;
    for(i = 0; i < a.length; i++)
        filt.push(a[i].innerHTML);
    filt = filt.map(item => Number(item));
    
    
    let filting = document.getElementById('filting');
    filting.onclick = function () {
        let min = Number(prompt("Введите нижнюю границу", "0"));
        let max = Number(prompt("Введите Верхнюю границу", "1000"));
    
        alert("Выбраны числа в диапазоне [" + min + "," + max + "]");
    
        let new_filt = filt.filter((a) => {
            if (a >= min && a <= max) return true;
            return false;
        });
    
        let f = document.getElementsByClassName('new_f')
        for(j = 0 ; j < filt.length; j ++){
            f[j].innerHTML = "";
        }
        for(j = 0 ; j < new_filt.length; j ++){
            f[j].innerHTML = new_filt[j];
        }
    }




    // ------------------------------------------------------


    // 3 Сортировка на сайте по алфавиту

    shopCartSortUp.addEventListener('click', () => {
        shopProducts.sort();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });
    });

    shopCartSortDown.addEventListener('click', () => {
        shopProducts.sort();
        shopProducts.reverse();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt++;
        });
    });


    // 4 задание

    const notif = document.querySelector('.notifs');
    const notifBtn = notif.querySelector('.notif__btn');
    const notifInner = notif.querySelector('.notif__inner');
    const notifCounter = notif.querySelector('.notif__counter');
    const notifArr = [
        'Ты молодец',
        'Ты все сделаешь',
        'Ты умничка',
        'Отдохни',
        'Все хорошо',
        'Ты всё успеешь',
    ];



    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        } else {
            numberNotif = 0;
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        }

        notifInner.append(element);

        notifCounter.textContent = counter;
    }

    let timerId = setInterval(createNotif, 3000);
    //Приостановка таймера при нажатии на колокольчик на 10 тысяч милисекунд
    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function() {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });
});
