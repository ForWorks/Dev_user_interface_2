var modalWindow = document.createElement('div');
modalWindow.className = "modalWindow";
var modalWindow_body = document.createElement('div');
modalWindow_body.className = "modalWindow_body";
var modalWindow_content = document.createElement('div');
modalWindow_content.className = "modalWindow_content";
var close = document.createElement('span');
close.textContent = "×";
close.className = "close";
var message = document.createElement('div');

var button = document.getElementById("button");
button.after(modalWindow);
modalWindow.appendChild(modalWindow_body);
modalWindow_body.appendChild(modalWindow_content);
modalWindow_content.appendChild(close);
close.after(message);

function outputRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://rpi-lab2.herokuapp.com/api/message', true);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        Object.keys(request.response).forEach(function (key) {
            var element = document.createElement('p');
            element.textContent = request.response[key].userName + " " + request.response[key].message;
            message.append(element);
        });
    };    
}

var isNotContent = true;
outputRequest();

modalWindow.onclick = function () {
    if (isNotContent == true) {
        modalWindow.style.display = "none";
        document.body.style.overflow = "auto";
    }
    else
        isNotContent = true;
};

modalWindow_content.onclick = function () {
    isNotContent = false;
};

close.onclick = function () {
    modalWindow.style.display = "none";
    document.body.style.overflow = "auto";
};

button.onclick = function () {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    message.textContent = "";
    outputRequest();
};









