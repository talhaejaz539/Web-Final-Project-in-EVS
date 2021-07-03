function Submit(){
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var fname=document.form.Name.value,
    lname=document.form.LastName.value,
    femail=document.form.Email.value,
    freemail=document.form.enterEmail.value,
    fpassword=document.form.Password.value;
    if(fname == ""){
        document.form.Name.focus();
        document.getElementById("errorBox").innerHTML = "Enter The First Name";
        return false;
    }
    if(lname == ""){
        document.form.LastName.focus();
        document.getElementById("errorBox").innerHTML = "Enter The Last Name";
        return false;
    }
    if(femail == ""){
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "Enter The Email";
        return false;
    }else if(!emailRegex.test(femail)){
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "Enter The valid Email";
        return false;
    }
    if(freemail == ""){
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "Re-enter The Email";
        return false;
    }else if(!emailRegex.test(freemail)){
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "Re-enter The valid Email";
        return false;
    }
    if(freemail != femail){
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "Emails are not matching, re-enter again";
        return false;
    }
    if(fpassword == ""){
        document.form.Password.focus();
        document.getElementById("errorBox").innerHTML = "Enter the Password";
        return false;
    }
    if(fname !='' && lname !='' &&  femail !='' && freemail !='' && fpassword !=''){
        document.getElementById("errorBox").innerHTML = "Form Submitted Successfully";
    }
}