function Calculator(){
    let methods = { // Define an object with our methods for subtraction and addition in an object so that we can add more later
        "-": ( x, y ) => x - y, // Arrow function expression
        "+": ( x, y ) => x + y
    };

    this.calculate = function( str ){ // Create a function using function expression notation with 1 parameter, str.

        let split = str.split(' '), // This splits the string (an array of characters) into 3 parts using whitespaces as seperators (split)
        x = +split[0], // First number
        op = split[1], // Mathematical operation
        y = +split[2]; // Last number

        if( !methods[op] || isNaN(x) || isNaN(y)){ // We only take certain mathematical expressions(op) and numbers (x and y)
            return NaN;
        }
        return methods[op]( x, y ); // Plug in x and y into our methods function, using the chosen operator.
    }

        this.addMethod = function(name, func){ // We have to do this to add methods
        methods[name] = func; // Adds the new function to our methods object.
        };
}

function calculateText(){
  let calculator = new Calculator;
  calculator.addMethod( "*", ( x, y ) => x * y ); // Add our own flavour of mathematical operators
  calculator.addMethod( "/", ( x, y ) => x / y );
  calculator.addMethod( "**", ( x, y ) => x ** y );
  document.getElementById('theText').value = calculator.calculate(document.getElementById('theText').value);
}
