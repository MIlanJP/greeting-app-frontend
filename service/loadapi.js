let baseURL="http://localhost:3000/api/greeting/"
const fetch=require('node-fetch')

const getMessages =async()=>{
    fetch(`${baseURL}messages`,{
        headers: {Accept: "application/json"}
    }).then(res=>{
        if(res.status!==200){
            console.log("Problem!!",res.status)
            return "Error While fetching messages"
        }
        res.json().then((data)=>{
            console.log(data)
            return data;
        })
    })
}