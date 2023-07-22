function disableRightClick(){
    document.getElementById("result").innerHTML = "Right Clicked Disabled";
    document.addEventListener("contextmenu", event =>
    event.preventDefault());
    alert("Right Click Is Disabled Now !")
    }
    function hideEmail(){
    var email = document.getElementById("useremail").value;
    document.getElementById("before").innerHTML = "Before : " +
    email;
    var arr = email.split("@");
    var username = arr[0];
    var domain = arr[1].split(".");
    var maindomain = domain[0];
    var domainextension = domain[1];
    document.getElementById("after").innerHTML = "After : username -" + username + ", domain - " + arr[1] + ", maindomain - " +
    maindomain + " & extension - " + domainextension;
    var finalEmail = username + "@" + maindomain + "." +
    domainextension;
    document.getElementById("final").innerHTML = "After Joining Email : " + finalEmail;
    }