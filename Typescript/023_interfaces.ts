interface User {
    email : string;
    firstName : string;
    lastName : string;
}

function profile(user: User) : string {
    return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: 'emibruni@gmail.com',
  firstName: 'Emily',
  lastName: 'Brunnette',
};

console.log(profile(realUser));
console.log(realUser.email);