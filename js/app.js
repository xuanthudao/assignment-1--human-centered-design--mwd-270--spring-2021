
function clear() {
    document.getElementById("form").reset();
}
function check(id) {
    for (let i = 1; i <= 2; i++) {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;

}
function calculate() {
    let checkedValue = null;
    let inputElements = document.getElementsByClassName("check-box");
    for(let i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            break;
        }
    }
    let name1 = document.getElementById("first-name").value;
    let name2 = document.getElementById("last-name").value;
    let number = document.getElementById("number").value;
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip-code").value;
    let area = document.getElementById("area-code").value;
    let phone = document.getElementById("phone").value;
    let salary = document.getElementById("salary").value;
    let date = document.getElementById("date").value;
    document.write("<h1>"+"Report" + "</h1>"+"</br>");
    document.write("Name: " + name1 + " " + name2 + "</br>");
    document.write("Address: " + number + " " + street + ", " + city + " " + state + " " + zip + "</br>");
    document.write("Desire salary: " + salary + "</br>");
    document.write("Phone: " + area + "-" + phone + "</br>");
    document.write("Willing to relocate: " + checkedValue+ "</br>");
    document.write("Available date: " + date+"</br>" );
}