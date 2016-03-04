function myFunction() {
    var x;
    if (confirm("Din bokning lyckades") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = x;
}
