function User(firstName, lastName)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.regDate = (new Date()).toDateString();
}

function UserList()
{
	var users = [];

	this.add = function(user)
	{
		users.push(user);
	}

	this.getAllUser = function()
	{
		return users;
	}
}

var userList = new UserList();
var newUser;

while(newUser = prompt("Введите имя и фамилию:"))
{
	var firstNameAndLastName = newUser.split(" ");
	userList.add(new User(firstNameAndLastName[0], firstNameAndLastName[1]));
}

var allUsers = userList.getAllUser();
for(var i = 0; i < allUsers.length; i++)
	console.log(allUsers[i].firstName + " " +
		allUsers[i].lastName + " " +
		allUsers[i].regDate + " ");