let books = document.querySelectorAll(".book");

//Восстановить порядок книг.
books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

//Заменить картинку заднего фона на другую из папки image
let backgroundImage = document.querySelector("body");
backgroundImage.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
document.querySelector(".books").children[2].querySelector("a").innerHTML = "Книга 3. this и Прототипы Объектов";

//Удалить рекламу со страницы
document.querySelector(".adv").remove();

//Восстановить порядок глав во второй и пятой книге
let secondBookList = document.querySelectorAll("ul")[1];
let secondBookElems = secondBookList.querySelectorAll("li");

secondBookList.append(secondBookElems[0],secondBookElems[1],secondBookElems[3],secondBookElems[6],
    secondBookElems[8],secondBookElems[4],secondBookElems[5],secondBookElems[7],
    secondBookElems[9],secondBookElems[2],secondBookElems[10]);

let fifthBookList = document.querySelectorAll("ul")[4];
let fifthBookElems = fifthBookList.querySelectorAll("li");
fifthBookList.append(fifthBookElems[0],fifthBookElems[1],fifthBookElems[9],fifthBookElems[3],
    fifthBookElems[4],fifthBookElems[2],fifthBookElems[6],fifthBookElems[7],
    fifthBookElems[5],fifthBookElems[8],fifthBookElems[10]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
let sixthBookList = document.querySelectorAll("ul")[5];
let sixthBookElems = sixthBookList.querySelectorAll("li");

let cloneElem = sixthBookElems[8].cloneNode(true)
cloneElem.textContent = "Глава 8: За пределами ES6";
sixthBookList.append(cloneElem);
cloneElem.after(sixthBookElems[9]);

