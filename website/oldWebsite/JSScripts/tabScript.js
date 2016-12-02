function openPage(evt, pageName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
function validateForm(){

    var x = document.forms["myForm"]["Name"].value;
    if(x == null || x == ""){
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["Email"].value;
    if(y == null || y == ""){
        alert("Email must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["Subject"].value;
    if(z == null || z == ""){
         alert("Subject must be filled out");
         return false;
    }
    var w = document.forms["myForm"]["Email"].value;
    if(w == null || w == ""){
        alert("Message is empty");
        return false;
    }
    var form = document.getElementById("hide");
    form.style.display = 'none';
    var thanks = document.getElementById("show");
    thanks.style.display = 'block';
    return false;
}
