
let baseURL="http://localhost:3000/api/greeting/"

let h=new Headers();
h.append("Accept",'application/json');

let req=new Request(`${baseURL}messages`,{
  method:"GET",
  headers:h,
  mode:'no-cors'
})

// Remove element and update
const updateELements=(element)=>{
  while (element.firstChild) {
    element.removeChild(element.firstChild);
}
}


let submitOnAdd=document.querySelector('.update-submit')
submitOnAdd.addEventListener('click',function(){
  updateMessage(document.getElementById('updateID').value,document.getElementById('updateMessage').value)
  getMessages();
})

// Fetch Operation to create greeting message
async function updateMessage(ID,updatedMessage){
  await fetch(`${baseURL}/greetingmessageid/${ID}/${updatedMessage}`,{
    method: 'PUT'
  })
}


// Event Listener for Creating Profiles
let submitOnUpdate=document.querySelector('.add-submit')
submitOnUpdate.addEventListener('click',function(){
  addMessage(document.getElementById('forFirstName').value,document.getElementById('forSecondName').value)
  getMessages();
})

// Fetch Operation to create greeting message
async function addMessage(firstname,secondname){
  await fetch(`${baseURL}${firstname}/${secondname}`,{
    method: 'POST'
  })
}

/**
 * Function to get all the messages from fetch
 */
let list1=[]
async function getMessages(){
 await fetch(`${baseURL}messages`,{
    headers:{Accept:"application/json"}
  }).then(res=>{
    if(!res.statusText){throw res}
    return res.json();
  }).then(json=>{
    // console.log(json.data)
    let listOfContent = document.querySelector(".list-of-messages");
    updateELements(listOfContent)
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
  ObjectID.innerText = `(ObjectId:"${user._id}")`;
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
  userName.innerText = name;
  let span1=document.createElement("span")
  span1.className='span'
  span1.innerText="(name)"
  userName.appendChild(span1)
  let message = document.createElement("div");
  message.className = "message-div";
  message.innerText = user.message;
  let span2=document.createElement("span")
  span2.className='span'
  span2.innerText="(Greeting)"
  message.appendChild(span2)
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

