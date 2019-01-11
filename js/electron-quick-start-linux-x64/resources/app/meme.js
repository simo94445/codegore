function Sindsyg() {
    this.tekst = function(str){
        this.tekst = str;
        let sindsygTekst = ""
        for(let char of str){
            sindsygTekst += this.random(char);
        }
        return sindsygTekst;
    };
    this.random = function(upperLower){
        let number = Math.random()*10;
        if(number>5){
            return upperLower.toUpperCase();
            number = Math.random()*10;
        } else{
            return upperLower.toLowerCase();
            number = Math.random()*10;
        }
    };
};

function changeText(){
  let sindsyg = new Sindsyg;
  document.getElementById('theText').value = sindsyg.tekst(document.getElementById('theText').value);
}
