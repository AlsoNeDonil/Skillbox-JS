function Vehicle()
{
	this.Speed          =     1;
	this.PriceForTicket =     1;
	this.Weight         =     1;
	this.IsSpecial      = false;

	this.SetSpeed = function(speed)
	{
		this.Speed = speed;
	}

	this.SetPriceForTicket = function(price)
	{
		this.PriceForTicket = price;
	}

	this.SetWeight = function(weight)
	{
		this.Weight = weight;
	}

	this.GetSpeed = function()
	{
		return this.Speed;
	}

	this.GetPriceForTicket = function()
	{
		return this.PriceForTicket;
	}

	this.GetWeight = function()
	{
		return this.Weight;
	}

	this.GetIsSpecial = function()
	{
		return this.IsSpecial;
	}
}

function Car()
{
	Vehicle.call(this);

	this.Mark  = '';
	this.Model = '';
	this.Color = '';

	this.SetMark = function(mark)
	{
		this.Mark = mark;
	}

	this.SetModel = function(model)
	{
		this.Model = model;
	}

	this.SetColor = function(color)
	{
		this.Color = color;
	}

	this.GetMark = function()
	{
		return this.Mark;
	}

	this.GetModel = function()
	{
		return this.Model;
	}

	this.GetColor = function()
	{
		return this.Color;
	}
}

function Plane()
{
	Vehicle.call(this);
	this.Airline = '';
	this.IsCargo = false;
	
	this.SetAirline = function(airline)
	{
		this.Airline = airline;
	}

	this.SetIsCargo = function(isCargo)
	{
		this.IsCargo = isCargo;
		this.IsSpecial = isCargo; // here is a modification of the parent properties
	}

	this.GetAirline = function()
	{
		return this.Airline;
	}

	this.GetIsCargo = function()
	{
		return this.IsCargo;
	}

}

function Ship()
{
	Vehicle.call(this);

	this.IsPassenger  = false;
	this.IsUnderwater = false;

	this.SetIsPassender = function(isPassenger)
	{
		this.IsPassenger = isPassenger;
		this.IsSpecial = !isPassenger; // here is a modification of the parent properties
	}

	this.SetIsUnderwater = function(isUnderwater)
	{
		this.IsUnderwater = isUnderwater;
		this.IsSpecial = isUnderwater; // here is a modification of the parent properties
	}

	this.GetIsPassender = function()
	{
		return this.IsPassender;
	}

	this.GetIsUnderwater = function()
	{
		return this.IsUnderwater;
	}
}


var plane = new Plane();
plane.SetIsCargo(true);
plane.SetWeight(162000);
plane.SetSpeed(955);

var ship = new Ship();
ship.SetIsUnderwater(true);
ship.SetSpeed(20);

console.group();
	console.log("plane's speed: ", plane.GetSpeed());
	console.log("plane's ticket price: ", plane.GetPriceForTicket());
	console.log("plane's weight: ", plane.GetWeight());
	console.log("plane is special: ", plane.GetIsSpecial());
	console.log("plane's airline:", plane.GetAirline())
	console.log("plane is cargo: ", plane.GetIsCargo());
console.groupEnd();

console.group();
	console.log("ship's speed: ", ship.GetSpeed());
	console.log("ship's ticket price: ", ship.GetPriceForTicket());
	console.log("ship's weight: ", ship.GetWeight());
	console.log("ship is special: ", ship.GetIsSpecial());
	console.log("ship is passenger: ", ship.IsPassender());
	console.log("ship is underwater: ", ship.GetIsUnderwater());
console.groupEnd();