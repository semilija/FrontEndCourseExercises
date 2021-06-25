function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) { {
	for (
		  var
			index = 0,             
			length = array.length,
			sum = 0;                
			index < length;         
			sum += array[index++]   
		);
		return sum;
	  }
	  
}

function multiply (array) {  {
		for (
		  var
			index = 0,             
			length = array.length,  
			mult = 1;                
			index < length;         
			mult *= array[index++]   
		);
		return mult;
	  }
	  
}

function power(a, b) {
	return a ** b;
}

function factorial(n) {
	var f = [];
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}