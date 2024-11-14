// toggle for accounts
const logIn=document.getElementById("logIn");
const signUp=document.getElementById("signUp");
const logInForm=document.getElementById("logInForm");
const signUpForm=document.getElementById("signUpForm");
const indicator =document.getElementById("indicator");

signUp.addEventListener("click",()=>{
    signUpForm.style.transform = "translateX(0px)";
    logInForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(150px)";
})
logIn.addEventListener("click",()=>{
    signUpForm.style.transform = "translateX(300px)";
    logInForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(50px)";

})