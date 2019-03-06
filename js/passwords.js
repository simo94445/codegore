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
      let symbols = ["% ", "$ ", "& ", "/ ", "( ", "[ ", "= ", "} ", "= ", "? ", "! ", " ", "£ ", "€ ", "! ", ", ", "* ", "| "];
      let securePassword = "";
      let min = Math.ceil(0);
      let max = Math.floor(symbols.length);
      securePassword += str + symbols[Math.floor(Math.random() * (max - min)) + min];
      return securePassword;
    };
}

function createPassword(){
  let password = new Password;
  document.getElementById('theText').value = password.createPw(document.getElementById('theText').value);
}
