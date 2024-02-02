function getUsers() {
    fetch("http://localhost:8080/api/user")
    .then((response)=>{
        return response.json()
    })
    .then((dataJson)=>{
        console.log(dataJson);
    })
}
function addUser(){
    fetch("http://localhost:8080/api/user",{
        headers:{
            "Content-type":"application/json"
        },
        method:"post",
        body: JSON.stringify({
            name:"lucas",
            email:"lucas@mail.com"
        })
    })
    .then((response)=>{
        return response.json()
    })
    .then((dataJson)=>{
        console.log(dataJson);
    })
}