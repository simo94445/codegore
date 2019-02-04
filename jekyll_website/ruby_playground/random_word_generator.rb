# Check amount of words and set word list location and some variables
file1 = File.open("/home/simon/codegore/jekyll_website/ruby_playground/lang1.txt", "r")
file2 = File.open("/home/simon/codegore/jekyll_website/ruby_playground/lang2.txt", "r")
filelocation = "/home/simon/codegore/jekyll_website/ruby_playground/lang1.txt"
filelocation2 = "/home/simon/codegore/jekyll_website/ruby_playground/lang2.txt"
wordstotal1 = file1.readlines.size
wordstotal2 = file2.readlines.size
print "Choosing from: ", wordstotal1 + wordstotal2, " words. \n\n"
password = []

# Specify the amount of words to create
wordcount = 12

# Generate a random number based on the amount of available words.
def choosewords(total)
  return rand(1...total)
end

# Choose a random word based on the random number.
def findwords(path, line)
  result = nil
  File.open(path, "r") do |f|
    while line > 0
      line -= 1
      result = f.gets
    end
  end
  # Randomise whether or not the word starts with uppercase or lowercase.
  if Random.rand(2) == 1
    return result.capitalize
  else
    return result.downcase
  end
end

# Output specified amount of random words to an array
for i in 0...wordcount
  if Random.rand(2) == 1
    password.push(findwords(filelocation, choosewords(wordstotal1)).chomp)
  else
    password.push(findwords(filelocation2, choosewords(wordstotal2)).chomp)
  end
end

# What symbols do you want? Specify in the array
def symbols()
  symbolsarray = [ " ", "_", " %", " $", "/", "#", "? ", " ", "__" ]
  return (symbolsarray[Random.rand(symbolsarray.size)])
end

# Print the password
for string in password
  print string + symbols
end
