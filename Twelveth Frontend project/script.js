"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // Первое задание 

    const links=document.querySelectorAll('.link');
    const colorList=['red','green','blue','pink','white','brown', 'gold'];

    links.forEach(link => {
        link.querySelector('a').style.color=colorList[Math.floor(Math.random()*colorList.length)];
    });



    // Второе задание 

    const listBlock=document.querySelector('.create-list');

    const list = document.createElement('ul');
    list.classList.add('user-list');
    list.style="text-align: left";
  
    listBlock.append(list);

    while(true){
        let item=prompt("Что вам нужно?","");

        if (!item) break;

        let listItem = document.createElement('li');
        listItem.textContent=item;
        list.append(listItem);
    }



    // Третье задание (уведомление)

    const notification=document.querySelector('.notif');
    const notifList=['Внимание!',' Спасибо за внимание','Хочу в отпуск на недельку','Необходимо отдохнуть!'];

    function showNotification(text){
        let notif=document.createElement('div');
        notif.className = 'notification';
        notif.textContent=text;
        notif.style=`
        padding: 10px 20px;
        display: inline-block;
        border: 2px solid black;
        background: #FFD1D6;
        `;

        notification.append(notif);

        setTimeout(()=>{notif.remove()},1500);
    }

    setInterval(() => {showNotification(notifList[Math.floor(Math.random()*notifList.length)])}, 3000);



    // Четвертое задание ()

    const area=document.querySelector(".area");
    const chicken=area.querySelector('img');

    chicken.style.top=Math.round(area.clientHeight/2 - chicken.offsetHeight/2) + "px";
    chicken.style.left=Math.round(area.clientWidth/2 - chicken.offsetWidth/2) + "px";
  
    const clickX=document.querySelector('.clickX').querySelector('span');
    const clickY=document.querySelector('.clickY').querySelector('span');

    area.onclick = function(click){
        clickX.textContent=click.clientX;
        clickY.textContent=click.clientY;
    }



    // Пятое задание (кнопка закрытия уведомления)

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

        element.style=`
        position: relative;
        width: 10%;
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid black;
        margin-bottom: 5px;
        `;

        notifInner.append(element);

        let closeTab = document.createElement('i');
        closeTab.className = 'fa-solid fa-xmark';

        closeTab.style=`
        position: absolute;
        right: 10px;
        top: 3px;
        cursor: pointer;
        `;

        element.append(closeTab);

        notifCounter.textContent = counter;

        // console.log(notifInner);
    }

    let timerId = setInterval(createNotif, 3000);
    
    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function() {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });

    notifInner.onclick = function(event) {
        if (!event.target.classList.contains('fa-xmark')) return;

        let notif = event.target.closest('.notif__item');
        notif.remove();

        counter--;
        notifCounter.textContent=counter;
    };

});
