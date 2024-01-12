const form = document.getElementById("registerForm");

form.addEventListener("submit", e=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);

    fetch("/api/register", {
        method:"POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then(result=>result.json())
    .then(json=>{
        console.log(json);
        if(json.status==="success"){
            localStorage.setItem("token", json.access_token)
            window.location.replace("http://localhost:8080/")
        }
    })
})