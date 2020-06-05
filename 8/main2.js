var filterByType = function()
{
    var outArray = [];

    for(var i = 1; i <= arguments.length; i++)
        if(arguments[0] == typeof arguments[i])
            outArray.push(arguments[i]);

    return outArray;
}

alert(filterByType('string', 10, 20, 'a', 'b', true, false));