// klasa do tworzenia obiektów, przechowujących stan aplikacji 
class AplicationState {
    constructor() {
        this.currentUserID = 1;
        this.listOfUsers = [];
    }
    setData(); 
    addUser(); 
    clearData();
}

// obecny stan aplikacji stworzony na podstawie klasy AplicationState
const currentStateOfApplication = new AplicationState();

// klasa do tworzenia obiektów z danymi pobranego usera
class User {
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
    }

};
