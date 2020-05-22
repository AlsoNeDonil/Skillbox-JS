function User(name, login, passwd)
{
	this.Name     = name;
	this.Login    = login;
	this.Password = passwd;
}

function checkIfUserExist(login, passwd, database)
{
	for(var i = 0; i < database.length; i++)
	{
		if(database[i].Login == login && database[i].Password == passwd)
			return database[i].Name;
	}

	return false;
} 

//test user 'database'
var userList = [];
userList.push(new User("Admin", "admin", "admin"));
userList.push(new User("Root", "root", "root"));
userList.push(new User("Bob", "veryHardLogin", "veryHardPassword"));
userList.push(new User("Test", "test", "test"));

var login = prompt("Введите логин:");
var passwd = prompt("Введите пароль:");

var name = "";
if(!(name = checkIfUserExist(login, passwd, userList)))
	alert("Вас нет в списке пользователей");
else
	alert(name);
