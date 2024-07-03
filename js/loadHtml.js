export function loadHTML(elementID, fileName) {
    var xhttp;
    var element = document.getElementById(elementID);
    if (element) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                element.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", fileName, true);
        xhttp.send();
    }
}