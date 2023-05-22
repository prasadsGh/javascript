function validate()
{
    var username= document.getElementById("uname");
    var password=document.getElementById("pass");

    if(username.value.trim()=="" || password.value.trim()=="")
    {
        alert("NO u are cheating, you cant left a box unfilled");
        return false;
    }
    else return true;
}