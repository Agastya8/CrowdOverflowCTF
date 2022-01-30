

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "elliot" && password == "elliot" ){
    alert ("Login successfully");
    
    window.location = "page2.html"; // Redirecting to other page.
    return false;
    }
    else{
        alert ("check id and pass");
        window.location = "index.html"; 
    // Redirecting to other page.
    return false;

}
}