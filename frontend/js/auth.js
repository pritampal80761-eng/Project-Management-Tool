async function register(){

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    await fetch(
    "http://localhost:5000/api/auth/register",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    });

    alert("Registered Successfully");
}

async function login(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const res = await fetch(
    "http://localhost:5000/api/auth/login",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });

    const data = await res.json();

    if(data.success){

        alert("Login Successful");

        window.location =
        "index.html";

    }else{

        alert("Invalid Credentials");
    }
}