#The prime factors of 13195 are 5, 7, 13 and 29.
#What is the largest prime factor of the number 600851475143 ?

#I only have one tip for factoring n = 600851475143. One of its prime factors are garantueed to be less than sqrt(n), so at most you'd have to check 80k something numbers.


primeme = 600851475143

def sqrt_babylonian(num)
  x = num
  y = 1.0
  e = 0.000001
  while x - y > e
    x = ( x + y ) / 2
    y = num / x
  end
  return x.round
end

sqrt = sqrt_babylonian(primeme)
num1 = 2
myarray = []
for i in num1...sqrt
  if primeme % i == 0
    if i % 2 != 0
      myarray << i
    end
  end
end
print "The highest prime factor of the given number is: ", myarray[-4]


#Comments from Kjqtte
#Oh dude, no need to do "if primeme % 2 != 0".
#An even number cannot be prime so instead you can do "for i in num1...sqrt n" but instead of having i increment with one every iteration, you have it increment by 2

#(num1...sqrt n).step(2)
#cuts the computing time in half

#nvm, step(2) won't since num1 = 2, you could just add an extra test for 3 at the beginning and let num1=3 and use the step(2) method
#then you're only testing odd numbers
