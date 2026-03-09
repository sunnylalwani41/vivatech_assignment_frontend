const BASE_URL = "https://vivatechrndbackend--d9352967050.replit.app";

function addUser(){

    const data = {
        name: document.getElementById("name").value,
        contactNumber: document.getElementById("contactNumber").value,
        roleId: document.getElementById("roleId").value
    };

    fetch(BASE_URL + "/add_user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("result").innerText="User Added";
        console.log(data);
    })
    .catch(err=>console.log(err));
}



function sendOtp(){

    const mobile=document.getElementById("otpMobile").value;

    fetch(BASE_URL + "/otp_send?contactNumber="+mobile)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("result").innerText="OTP Sent";
    })
    .catch(err=>console.log(err));
}



function verifyOtp(){

    const data={
        contactNumber:document.getElementById("verifyMobile").value,
        otp:document.getElementById("otp").value
    };

    fetch(BASE_URL + "/otp_submit",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{

        localStorage.setItem("token",data.token);

        document.getElementById("result").innerText="Login Successful";
        console.log(data);

    })
    .catch(err=>console.log(err));
}