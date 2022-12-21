    /////////       1 задание    //////////////
    contents.onclick = function(event) {

        function handleLink(href) {
          let isLeaving = confirm(`Leave for ${href}?`);
          if (!isLeaving) return false;
        }
  
        let target = event.target.closest('a');
  
        if (target && contents.contains(target)) {
          return handleLink(target.getAttribute('href'));
        }
      };
  
       /////////       2 задание    //////////////
       thumbs.onclick = function(event) {
        let thumbnail = event.target.closest('a');
  
        if (!thumbnail) return;
        showThumbnail(thumbnail.href, thumbnail.title);
        event.preventDefault();
      }
  
      function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
      }
  
  
      /////////       3 задание    //////////////    
      ul.onclick = function(event) {
        if (event.target.tagName != "LI") return;
  
        if (event.ctrlKey || event.metaKey) {
          toggleSelect(event.target);
        } else {
          singleSelect(event.target);
        }
  
      }
      // предотвращает ненужное выделение элементов списка при клике
      ul.onmousedown = function() {
        return false;
      };
  
      function toggleSelect(li) {
        li.classList.toggle('selected');
      }
  
      function singleSelect(li) {
        let selected = ul.querySelectorAll('.selected');
        for(let elem of selected) {
          elem.classList.remove('selected');
        }
        li.classList.add('selected');
      }
  
  
  
       /////////       4 задание    //////////////   
      let thumb = slider.querySelector('.thumb');
  
      thumb.onmousedown = function(event) {
        event.preventDefault(); // предотвратить запуск выделения (действие браузера)
  
        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        // shiftY здесь не нужен, слайдер двигается только по горизонтали
  
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
  
        function onMouseMove(event) {
          let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
  
          // курсор вышел из слайдера => оставить бегунок в его границах.
          if (newLeft < 0) {
            newLeft = 0;
          }
          let rightEdge = slider.offsetWidth - thumb.offsetWidth;
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          }
  
          thumb.style.left = newLeft + 'px';
        }
  
        function onMouseUp() {
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);
        }
  
      };
  
      thumb.ondragstart = function() {
        return false;
      };
  
  
  
  
      /////////       6 задание    //////////////   
      train.onclick = function() {
        let start = Date.now();
  
        let timer = setInterval(function() {
          let timePassed = Date.now() - start;
  
          train.style.left = timePassed / 5 + 'px';
  
          if (timePassed > 5300) clearInterval(timer);
  
        }, 20);
      }
  

  
      function animate({timing, draw, duration}) {

        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
          // timeFraction изменяется от 0 до 1
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
          // вычисление текущего состояния анимации
          let progress = timing(timeFraction);
      
          draw(progress); // отрисовать её
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
      
        });
      }
  
      function makeEaseOut(timing) {
        return function(timeFraction) {
          return 1 - timing(1 - timeFraction);
        }
      }
  
      function bounce(timeFraction) {
        for (let a = 0, b = 1; 1; a += b, b /= 2) {
          if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
          }
        }
      }
  
      ball.onclick = function() {
  
        let to = field.clientHeight - ball.clientHeight;
  
        animate({
          duration: 2000,
          timing: makeEaseOut(bounce),
          draw(progress) {
            ball.style.top = to * progress + 'px'
          }
        });
  
  
      };
  
      /////////       5 задание    ////////////// 
      var Sum=0;
      let storageMock = [
      {id: 1, name: "Мороженое шоколадное", price: 50, amount: 1},
      {id: 2, name: "Чизкейк Нью-Йорк", price: 120, amount: 1},
      {id: 3, name: "Круассан с матчей и нутеллой", price: 200, amount: 1},
      {id: 4, name: "Пончик клубничный", price: 80, amount: 1},
      {id: 5, name: "Медовик", price: 50, amount: 1}];
  
      let Cart = []
      document.addEventListener("DOMContentLoaded", function() { 
      fillStorageTable(storageMock);
      });
  
      function fillStorageTable(items) {
          let storageTable = document.getElementById('storage');
          
          items.forEach(e => {
          let itemTR = document.createElement('tr');
          itemTR.innerHTML = `<td>${e.id}</td><td>${e.name}</td><td>${e.price}</td><td>${e.amount}</td>`;
          storageTable.append(itemTR);
          itemTR.addEventListener('click', addToCart);
          
          
          
      });
      }
    
    function addToCart() {
      Sum += parseInt(this.childNodes[2].textContent.toString());
      document.getElementById('sum').innerHTML = Sum;
        let cartTR = document.createElement("tr");
        cartTR.innerHTML = `<td>${this.childNodes[1].textContent}</td><td>${this.childNodes[2].textContent}</td><td>${this.childNodes[3].textContent}</td>`;
       document.getElementById('cart').append(cartTR);
  }