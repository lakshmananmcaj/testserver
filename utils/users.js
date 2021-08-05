// [{
//   id: 'sdfgsdfgsdfg',
//   name: 'WDJ',
//   room: 'node js'
// }]


class Users {
  constructor() {
    this.users = [];
    this.otherCaller = [];
  }

  addUser(id, name, room,stsCall) {
    let user = {id, name, room,stsCall};   
    this.users.push(user);
    return user;
  }

  getUserList (room,sts) {    
    let users = this.users.filter((user) => user.room === room && user.stsCall == "NA") ;
    let namesArray = users.map((user) => user.name);
    return namesArray;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  removeUser(id) {
    let user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
}

module.exports = {Users};
