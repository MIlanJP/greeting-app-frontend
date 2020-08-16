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
  },
];

let listOfContent = document.querySelector(".list-of-messages");
// console.log(listOfContent);
let box = document.createElement("div");

list.forEach((user) => {
  let messageContent = document.createElement("div");
  messageContent.className = "message-content-box";
  let firstname = document.createElement("div");
  firstname.className = "firstname-div";
  firstname.innerText = user.firstname;
  let secondname = document.createElement("div");
  secondname.className = "secondname-div";
  secondname.innerText = user.secondname;
  let message = document.createElement("div");
  message.className = "message-div";
  message.innerText = user.message;
  messageContent.appendChild(firstname);
  messageContent.appendChild(secondname);
  messageContent.appendChild(message);
  listOfContent.appendChild(messageContent);
});

// listOfContent.appendChild(box)
// let popup= document.querySelector('.delete-pop-up')
// popup.style.display=''
// console.log(popup.style.display,"printing display")

document.querySelector(".add-side-nav").addEventListener("click", () => {
  showForm(".add-pop-up");
});
document.querySelector(".update-side-nav").addEventListener("click", () => {
  showForm(".update-pop-up");
});
document.querySelector(".delete-side-nav").addEventListener("click", () => {
  showForm(".delete-pop-up");
});

function showForm(classname) {
  let popuplist = [".add-pop-up", ".update-pop-up", ".delete-pop-up"];

  popuplist.forEach(function (clsname) {
    if (clsname !== classname) {
      document.querySelector(clsname).style.display = "none";
      console.log("Executed")
    }
  });
  let popup = document.querySelector(classname);
  let displayStatus = popup.style.display;
  console.log(displayStatus)
  if (displayStatus !== "none" || displayStatus !== "") {
    popup.style.display = "none";
  } if(displayStatus === "none"|| displayStatus === "") {
    popup.style.display = "block";
  }
}

// function popup(classname){
//    let popup= document.querySelector(classname)

// }
