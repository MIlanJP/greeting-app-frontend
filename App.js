let baseURL = "http://localhost:3000/api/greeting/";

let h = new Headers();
h.append("Accept", "application/json");

let req = new Request(`${baseURL}messages`, {
  method: "GET",
  headers: h,
  mode: "no-cors",
});

// Remove element and update
const updateELements = (element) => {

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  document.getElementById("pop-ups").style.display ="none"
};
// Event Listener to delete the Greeting message
let deleteOnSubmit = document.querySelector(".delete-submit");
deleteOnSubmit.addEventListener("click", async function () {
  await deleteMessage(document.getElementById("deleteID").value);
  getMessages();
  document.querySelector(".delete-pop-up").style.display = "none";
});

// Fetch Operation to delete greeting message
async function deleteMessage(ID) {
  await fetch(`${baseURL}greetingmessageid/${ID}`, {
    method: "DELETE",
  });
  snack(`${ID} is been deleted successfully`,'red','white')
  document.getElementById("deleteID").value = "";
}

// Event Listener to update the Greeting message
let updateOnSubmit = document.querySelector(".update-submit");
updateOnSubmit.addEventListener("click", async function () {
  await updateMessage(
    document.getElementById("updateID").value,
    document.getElementById("updateMessage").value
  );
  getMessages();
  document.querySelector(".update-pop-up").style.display = "none";
});

// Fetch Operation to update greeting message
async function updateMessage(ID, updateMessage) {
  await fetch(`${baseURL}greetingmessageid/${ID}/${updateMessage}`, {
    method: "PUT",
  });
  document.getElementById("updateID").value = "";
  document.getElementById("updateMessage").value = "";
  snack("Greeting message is updated ","yellow",'black')
}

// Event Listener for Creating Profiles
let submitOnAdd = document.querySelector(".add-submit");
submitOnAdd.addEventListener("click", async function () {

  await addMessage(
    document.getElementById("forFirstName").value,
    document.getElementById("forSecondName").value
  );
  await getMessages();
  document.getElementById("forFirstName").value=''
  document.getElementById("forSecondName").value=''
});

// Fetch Operation to create greeting message
async function addMessage(firstname, secondname) {
  await fetch(`${baseURL}${firstname}/${secondname}`, {
    method: "POST",
  });
  snack(`( Hello ${firstname} ${secondname} ) message Generated`,'green','white')
}

/**
 * Function to get all the messages from fetch
 */
let list1 = [];
async function getMessages() {
  await fetch(`${baseURL}messages`, {
    headers: { Accept: "application/json" },
  })
    .then((res) => {
      if (!res.statusText) {
        throw res;
      }
      return res.json();
    })
    .then((json) => {
    
      let listOfContent = document.querySelector(".list-of-messages");
      updateELements(listOfContent);
      list1 = json.data;
      lists();
    })
    .catch((err) => {
      console.log(err);
      console.log("Error fetching ");
    });
}

getMessages();

function lists() {
  let listOfContent = document.querySelector(".list-of-messages");

  let box = document.createElement("div");

  list1.forEach((user) => {
    let messageContent = document.createElement("div");
    messageContent.className = "message-content-box";
    let ObjectID = document.createElement("div");
    ObjectID.id="ObjectID"
    ObjectID.className = "ObjectID-div";
    ObjectID.innerText = `(ObjectId:"${user._id}")`;
    let name;
    if (
      typeof user.firstname !== "undefined" &&
      typeof user.lastname !== "undefined"
    ) {
      name = user.firstname + " " + user.lastname;
    } else if (typeof user.firstname === "undefined") {
      name = user.lastname;
    } else {
      name = user.firstname;
    }
    let userName = document.createElement("div");
    userName.className = "Name-div";
    userName.innerText = name;
    let span1 = document.createElement("span");
    span1.className = "span";
    span1.innerText = "(name)";
    userName.appendChild(span1);
    let message = document.createElement("div");
    message.className = "message-div";
    message.innerText = user.message;
    let span2 = document.createElement("span");
    span2.className = "span";
    span2.innerText = "(Greeting)";
    message.appendChild(span2);
    messageContent.appendChild(ObjectID);
    messageContent.appendChild(message);
    messageContent.appendChild(userName);
    listOfContent.appendChild(messageContent);
  });
}



const listnav = document.querySelector(".list-side-nav");

document.querySelector(".add-side-nav").addEventListener("click", () => {
  showForm(".add-pop-up");
});
document.querySelector(".update-side-nav").addEventListener("click", () => {
  showForm(".update-pop-up");
});
document.querySelector(".delete-side-nav").addEventListener("click", () => {
  showForm(".delete-pop-up");
});

let closePopup = document.querySelectorAll(".close-button");
closePopup.forEach((closeElement) => {
  closeElement.addEventListener("click", () => {
    document.getElementById("pop-ups").style.display ="none"
    CPOPUP();
  });
});

function CPOPUP() {
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
    document.getElementById("pop-ups").style.display ="none"
  }
  if (displayStatus === "none" || displayStatus === "") {
    popup.style.display = "block";
    document.getElementById("pop-ups").style.display ="block"
  }
}

function snack(message,bgcolor,color) {
  // Get the snackbar DIV
  let x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";
  x.innerText=message;
  x.style.backgroundColor=bgcolor
  x.style.color=color;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}