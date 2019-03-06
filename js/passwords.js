function Password() {
    this.createPw = function(str){
      let finalPassword = "";
      let split = str.split(' ');
      for(i in split){
        finalPassword += this.addEntropy(split[i]);
      }
      return finalPassword;
    };

    this.addEntropy = function(str){
      let symbols = ["% ", "$ ", "& ", "/ ", "( ", "[ ", "= ", "} ", "= ", "? ", "! ", " ", " ", "£ ", "€ ", "! ", ") "];
      let number = Math.random()*10;
      let securePassword = "";
      securePassword += str + symbols[Math.round(Math.random() * symbols.length)];
      return securePassword;
    };
}

function createPassword(){
  let password = new Password;
  document.getElementById('theText').value = password.createPw(document.getElementById('theText').value);
}
