/* Programs can solve all kinds of problems, and to do this it's important that it knows the correct data type its given, so
* that it can treat it right. There's the following datatypes in C++:
*
* bool, for boolean values (true/false)
* char, (character) for arrays of characters stored in 8 bit (ASCII)
* wchar_t, (wide character type) for arrays of characters stored in 16 bit (unicode)
* short, int, long, for integers
* float, double, long double, for floating-point values, that is all real numbers excluding whole numbers.
* void, we'll figure that out later.
*
* Since computers use different methods for processing and saving data, the data type must be known.
* Type defines the internal representation of the data, and the amount of memory to allocate.
* All other types than the ones listed above, such as vectors, pointers and classes, are based on the types listed above. */

#include <iostream>
#include <climits> // This gives us the definition of INT_MIN and INT_MAX

using namespace std;

int main(){
cout << "minimum int = " << INT_MIN << endl << "maxmimum int = " << INT_MAX << endl << "maximum unsigned int = " << UINT_MAX; // outs maxmimum INT and UINT values.
}

/* short, int, long are available for operation with integers, having their range of values distinguishing them from one another.
* int is tailor-made for computers, and adapts to the length of a register on the computer. For 16 bit, they're equivalent to short,
* and for 32 bit they're equaivalent to long. */
