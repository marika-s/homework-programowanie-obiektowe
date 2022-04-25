class AplicationState {
  constructor() {
    this.userId = 1;
    this.listOfUsers = [];
  }
  setData(newListOfUsers) {
    if (!newListOfUsers.length) throw Error("Array cannot be empty!");
    this.listOfUsers = [...newListOfUsers];
  }
  addUser(user) {
    if (!user.id) throw Error("User property is empty!");
    this.userId += 1;
    this.listOfUsers.push(user);
  }
  clearData() {
    this.userId = 1;
    this.listOfUsers = [];
  }
}

const currentStateOfApplication = new AplicationState();

class User {
  constructor(id, name, username, email, address) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.isEdited = false; // homework
  }
  get fullName() {
    return `${this.name} ${this.username}`;
  }
  set updatedFullName(updatedFullName) {
    [this.name, this.username] = updatedFullName.split(" ");
  }
  get FullAddress() {
    return `${this.address.street} ${this.address.suite}, ${this.address.zipcode} ${this.address.city}`;
  }
}

const getUserDataButton = document.getElementById("getUserDataButton");
const userList = document.getElementById("usersList");
const currentUserId = document.getElementById("currentUserId");

const onGetUserDataButtonClick = () => {
  fetch(
    `https://jsonplaceholder.typicode.com/users/${currentStateOfApplication.userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      const { id, name, username, email, address } = data;
      const user = new User(id, name, username, email, address);

      currentStateOfApplication.addUser(user);

      updateUserIdToHtml(id);
      addUserToHtml(user);
    })
    .catch((error) => console.log(`${error}`));
};

getUserDataButton.addEventListener("click", onGetUserDataButtonClick);

function updateUserIdToHtml(id) {
  currentUserId.innerHTML = id;
}

function addUserToHtml(user) {
  const userHtmlElement = document.createElement("li");
  userList.appendChild(userHtmlElement);
  userHtmlElement.innerHTML = `<p id="user-id${user.id}">#${user.id}: ${user.name} ${user.username} <button class="btn">Edit</button> </p>`; //homework
}

// Homework - delete

function removeClickedUser(event) {
  if (event.target.nodeName === "P") {
    //warunek dodany ze względu na button EDIT
    if (confirm("Are you sure you want to remove this user?") == true) {
      const clickedUserTag = document.getElementById(event.target.id);
      clickedUserTag.parentNode.remove(); //usunięcie usera z DOM
      removeUserFromApplicationState(event);
    }
  }
}

function removeUserFromApplicationState(event) {
  let indexToRemove = currentStateOfApplication.listOfUsers.findIndex(
    //wyszukuje index z tablicy obiektów z szukanym ID usera
    (data) => data.id === getUserIdFromHtmlTagID(event.target.id)
  );
  currentStateOfApplication.listOfUsers.splice(indexToRemove, 1); // usunięcie usera z currentStateOfApplication
}

function getUserIdFromHtmlTagID(eventDetails) {
  const id = eventDetails.match(/\d/g).join("") * 1; //z np.user-id1 wybieram cyfry, żeby mieć ID usera z tablicy currentStateOfApplication; ewentualny join, jeżeli liczba będzie dwucyfrowa; *1 -> zamiana ze string na number;
  return id;
}

userList.addEventListener("click", removeClickedUser);

// Homework - edit

function openForm(event) {
  if (event.target.nodeName === "BUTTON") {
const FormHtmlElement = document.createElement("form");
event.target.parentNode.appendChild(FormHtmlElement);
FormHtmlElement.innerHTML = '<label for="first-name">First name:</label><input id="first-name" type="text"><br><label for="last-name">Last name:</label><input id="last-name" type="text">'
FormHtmlElement.setAttribute("class", "form");
}}

userList.addEventListener("click", openForm);
