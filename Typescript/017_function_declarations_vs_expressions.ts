console.log(fullName('Brenden', 'Brunnette'));
// console.log(otherFullName('Brenden', 'Brunnette'));
// console.log(thirdFullName('Brenden', 'Brunnette'));

// function declaration
function fullName(first : string, last : string) : string {
    return first + " " + last;
}


// function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
    return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}