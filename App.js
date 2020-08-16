let list = [
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  }, {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  }, {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },{
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },{
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
  {
    firstname: "Milan",
    secondname: "Gowda",
    message: "Welcome to Node JS Milan Gowda",
  },
];
let baseURL="http://localhost:3000/api/greeting/"

let h=new Headers();
h.append("Accept",'application/json');

let req=new Request(`${baseURL}messages`,{
  method:"GET",
  headers:h,
  mode:'no-cors'
})
let list1=[]
async function getMessages(){
 
 await fetch(`${baseURL}messages`,{
    headers:{Accept:"application/json"}
  }).then(res=>{
    if(!res.statusText){throw res}
    return res.json();
  }).then(json=>{
    // console.log(json.data)
    list1=json.data;
    console.log(list1)
    lists();
  }).catch(err=>{
    console.log(err);
    console.log("Error fetching ")
  })
}

getMessages();

function lists(){
let listOfContent = document.querySelector(".list-of-messages");
// console.log(listOfContent);
let box = document.createElement("div");

list1.forEach((user) => {
  let messageContent = document.createElement("div");
  messageContent.className = "message-content-box";
  let ObjectID=document.createElement("div");
  ObjectID.className="ObjectID-div";
  ObjectID.innerText = "(ObjectId:) "+user._id;
  let name;
  if(typeof user.firstname!=="undefined"&& typeof user.lastname!=="undefined"){
    name= user.firstname+" "+user.lastname;
  }else if(typeof user.firstname==="undefined"){
      name=user.lastname
  }else{
    name=user.firstname
  }
  let userName = document.createElement("div");
  userName.className = "Name-div";
  userName.innerText = "Name : "+name ;
  let message = document.createElement("div");
  message.className = "message-div";
  message.innerText = user.message+"(Greeting)";
  messageContent.appendChild(ObjectID);
  messageContent.appendChild(message);
  messageContent.appendChild(userName);
 

  listOfContent.appendChild(messageContent);
});
}

// listOfContent.appendChild(box)
// let popup= document.querySelector('.delete-pop-up')
// popup.style.display=''
// console.log(popup.style.display,"printing display")

const listnav= document.querySelector('.list-side-nav');

document.querySelector(".add-side-nav").addEventListener("click", () => {
  showForm(".add-pop-up");
});
document.querySelector(".update-side-nav").addEventListener("click", () => {
  showForm(".update-pop-up");
});
document.querySelector(".delete-side-nav").addEventListener("click", () => {
  showForm(".delete-pop-up");
});

let closePopup=document.querySelectorAll('.close-button');
closePopup.forEach((closeElement)=>{
    closeElement.addEventListener('click',()=>{CPOPUP()})
})

function CPOPUP(){
    let popuplist = [".add-pop-up", ".update-pop-up", ".delete-pop-up"];
    popuplist.forEach(function (clsname) {
        document.querySelector(clsname).style.display = "none";
    });
}


function showForm(classname) {
  let popuplist = [".add-pop-up", ".update-pop-up", ".delete-pop-up"];

  popuplist.forEach(function (clsname) {
    if (clsname !== classname) {
      document.querySelector(clsname).style.display = "none";
    }
  });
  let popup = document.querySelector(classname);
  let displayStatus = popup.style.display;
  if (displayStatus !== "none" || displayStatus !== "") {
    popup.style.display = "none";
  } if(displayStatus === "none"|| displayStatus === "") {
    popup.style.display = "block";
  }
}

