# hello
puts "Hello, look at this: "
#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#Find the sum of all the multiples of 3 or 5 below 1000.
num1 = 0
num2 = 0
while num1 < 1000
  if num1 % 3 == 0
    puts num1
    num2 += num1
    num1 += 1
  elsif num1 % 5 == 0
    puts num1
    num2 += num1
    num1 += 1
  else
    num1 += 1
  end
end
puts "The sum equals: ", num2
