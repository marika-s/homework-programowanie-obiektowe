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
    }
    get fullName() {
        return `${this.name} ${this.username}`;
    }
    set updatedFullName(updatedFullName){
        [this.name, this.username] = updatedFullName.split(" ");
    }
    get FullAddress() {
        return `${this.address.street} ${this.address.suite}, ${this.address.zipcode} ${this.address.city}`;
    }
};

const getUserDataButton = document.getElementById("getUserDataButton");
const userList = document.getElementById("usersList");
const currentUserId = document.getElementById("currentUserId");

const onGetUserDataButtonClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${currentStateOfApplication.userId}`)
      .then((response) => response.json())
      .then((data) => {
        const { id, name, username, email, address} = data;
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
  }; 

  function addUserToHtml(user) {
      const userHtmlElement = document.createElement("li");
      userList.appendChild(userHtmlElement);
      userHtmlElement.innerHTML = `<p id="user-id${user.id}">#${user.id}: ${user.name} ${user.username} </p>`;
  }; 

// Homework

function removeClickedUser(event) {    
    const clickedUser = event.target.id; 
    const clickedUserId = document.getElementById(`${clickedUser}`);
    clickedUserId.parentNode.remove();
    
    


    //deleteUserfromAplicationState();
   
};

userList.addEventListener("click", removeClickedUser);








