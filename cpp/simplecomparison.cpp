#include <iostream>
#include <climits> // This gives us the definition of INT_MIN and INT_MAX

using namespace std;

// set variables
bool a = true;
bool b = true;
bool c = false;

// create main function
int main(){
  if((a||b)&&(!c)){ // do the thing
    cout << "shit's true" << endl; // output true if the thing returns true
  } else{
    cout << "shit's not true" << endl; // output false if the thing is false
  }
}
