const BASE_URL = "https://vivatechrndbackend--d9352967050.replit.app";
// const BASE_URL = "http://localhost:8080";

function addUser(data){

    fetch(BASE_URL + "/add_user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        closePopup();
        openOtpVerificationSession();

        console.log(data);
    })
    .catch(err=>console.log(err));
}

function sendOtp(){

    const mobile=document.getElementById("contactNumber").value;

    fetch(BASE_URL + "/send_otp?contactNumber="+mobile)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>console.log(err));
}


let userLoginBtn = document.getElementsByClassName("user-login");

for(let i=0;i<userLoginBtn.length;i++){
    userLoginBtn[i].addEventListener("click", () => {
        document.getElementById("login-background").style.display = "flex";
    });
}

let displayLoginButton = () => {
    for(let i=0;i<userLoginBtn.length;i++){
        userLoginBtn[i].style.display = "flex";
    }

    document.querySelector(".user-logout").style.display = "none";
}

let displayLogoutButton = () => {
    for(let i=0;i<userLoginBtn.length;i++){
        userLoginBtn[i].style.display = "none";
    }
    document.querySelector(".user-logout").style.display = "flex";
}

function verifyOtp(contactNumber, otp){
    // let contactNumber = document.getElementById("verifyMobile").value;
    // let otp = document.getElementById("otp").value;

    fetch(BASE_URL + "/otp_submit?contactNumber=" + contactNumber + "&otp=" + otp, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem("token",data.token);
        closeOtpPopup();
        Swal.fire("Login Successfully!");
        displayLogoutButton();

        console.log(data);
    })
    .catch(err=>console.log(err));
}

function getAllRole(){

    fetch(BASE_URL + "/get_all_role")
    .then(res=>res.json())
    .then(data=>{
        let roleSelect = document.getElementById("role");
        
        roleSelect.innerHTML = ""; // Clear existing options
        //default option
        let defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Select Role";
        roleSelect.appendChild(defaultOption);

        console.log(data);
        if(data?.object?.length){
            data.object.forEach(role => {
                let option = document.createElement("option");
                option.value = role.uuid;
                option.text = role.roleName;
                roleSelect.appendChild(option);
            });
        }
    })
    .catch(err=>console.log(err));
}

let disableLogin = () => {
    document.getElementById("contactNumber").disabled = true;
    document.querySelector("#loginForm button[type='submit']").disabled = true;
}

let closePopup = () =>{
    document.getElementById("login-background").style.display = "none";
}

let closeOtpPopup = () =>{
    document.getElementById("otp-verification-background").style.display = "none";
}

let openOtpVerificationSession = () => {
    document.getElementById("otp-verification-background").style.display = "flex";

    document.getElementById("otpForm").addEventListener("submit", (e) => {
        e.preventDefault();
        let contactNumber = document.getElementById("contactNumber").value;
        let otp = document.getElementById("otp").value;
        verifyOtp(contactNumber, otp);
    });
}

let registerationFormDisplay = () => {
    document.querySelector(".register-container").style.display = "flex";

    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        let roleSelect = document.getElementById("role").value;
        if(!roleSelect){
            roleSelect = null;
        }
        
        const data = {
            name: document.getElementById("name").value,
            contactNumber: document.getElementById("contactNumber").value,
            roleId: roleSelect 
        };

        addUser(data);
    });
}

function checkUserExistence(){

    const mobile=document.getElementById("contactNumber").value;

    fetch(BASE_URL + "/check_user_exist?contactNumber="+mobile)
    .then(res=>res.json())
    .then(data=>{
        if(data.object === true){
            disableLogin();
            sendOtp();
            closePopup();
            openOtpVerificationSession();
        }
        else{
            disableLogin();
            getAllRole();
            registerationFormDisplay();
        }
    })
    .catch(err=>console.log(err));
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    disableLogin();
    checkUserExistence();
});

document.querySelector("#resentOtp").addEventListener("click", () => {
    sendOtp();
});

document.querySelector(".user-logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    Swal.fire("Logout Successfully!");
    displayLoginButton();
});

localStorage.getItem("token") ? displayLogoutButton() : displayLoginButton();


// add role, add access control, test access control