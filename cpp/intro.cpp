/*
* A C++ program is made up of objects, their accompanying member functions and global functions, which don't belong to any single particular class.
* Each function fulfills its own designated task, and can also call other functions, and even use these functions outputs as inputs.
* You can use ready-made functions from the standard library, or you can write them yourself. The main() function is necessary,
* as it's sort of the 'main program'. */

#include <iostream> /* #, number, means that what's coming next is intended for the preprocessor.
* You can use #include <filename> to have the preprocessor copy the quoted file to this position in the sourcecode.
* This can be used to include all the information contained in the headerfile. The headerfile iostream comprises conventions
* for input and output streams (streams being _flows_ of data) */

using namespace  std; /* Pre-defined names in C++ can be found in the std (standard) namespace.
* The using directive allows direct access to the names of the std namespace.
* Namespaces are sets of symbols that are used to organize objects of various kinds, so that these objects may be
* referred to by their assigned names. Examples of namespaces include file systems (namespaces that assign names to files)
* computer networks, distributed systems that assign names to resources, such as computers, printers, servers, files, etc. */


void line(), foo(), bar(); /* Prototypes are created to allow the main() function to be defined first, which is good
* because this function defines how the program will run. This way, main() can call functions that has yet to be defined. */

/* Programs written in C++ start by running the instructions within the main() function. Apart from the fact that
* the main() can't be renamed, it's like any other function in C++.*/
int main(){ // We create a global function with the type Integer.

  cout << "HELLO" << endl; /* The cout function, console output, outputs something to the console.
  * The name cout designates an object responsible for output. The << indicates that something is being pushed to the output-
  stream. endl (end of the line) causes a line feed. */
  line(); // call these functions
  foo();
  line();
  bar();
  line();
  line();
  return 0; /* Here we terminate the main() function returning the value 0 as an exit code to the calling program.
  * In standard practice, exit code 0 means that a program terminated correctly. */
}

// These functions are just created to be called in the main function, to get an idea of how functions are written.
void line(){
  cout << "-------------------------------" << endl;
}
void foo(){
  cout << "foo" << endl;
}
void bar(){
  cout << "bar" << endl;
}
