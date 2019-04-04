function dateTime() {
    let x = new Date();
    document.getElementById("date-time").innerHTML = x; //get the code from the declared function 
}


function getWeb() {

    document.getElementById("web").innerHTML = "The URL is " + document.URL; // this function specifies the URL fo the whole document(webpage)

}

function firstWord() {
    let a = prompt("Enter a sentence") // prompt is so that the user can input a string a test if the function works or not 
        /*"Java was meant to be used in conjunction with JavaScript";*/
    let w = a.startsWith("Java");

    window.alert("This is " + w)

}


function largest() {
    var num1, num2, num3;
    num1 = Number(document.getElementById("x").value);
    num2 = Number(document.getElementById("y").value);
    num3 = Number(document.getElementById("z").value);

    if (num1 > num2 && num1 > num3) {
        window.alert(num1 + " is the largest number");
    } else if (num2 > num1 && num2 > num3) {
        window.alert(num2 + " is the largest number");
    } else if (num3 > num1 && num3 > num1) {
        window.alert(num3 + " is the largest number"); // use window.alert for testing purposes and it allows a prompt to test the code
    }
}