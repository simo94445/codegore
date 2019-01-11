let sindsyg = {
    tekst(str){
        this.tekst = str;
        let sindsygTekst = ""
        for(let char of str){
            sindsygTekst += this.random(char);
        }
        return sindsygTekst;
    },
    random(upperLower){
        let number = Math.random()*10;
        if(number>5){
            return upperLower.toUpperCase();
            number = Math.random()*10;
        } else{
            return upperLower.toLowerCase();
            number = Math.random()*10;
        }
    }
};

alert(sindsyg.tekst("Jeg har skrevet et lille script der laver sindsyg tekst for mig"));
