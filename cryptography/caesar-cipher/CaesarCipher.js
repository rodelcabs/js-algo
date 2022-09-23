class CaesarCipher {
  constructor(shift, useUpperCase = false){
    this.shift = shift;
    this.maxLength = 26;
    // generate an alphabet array
    this.alpha = Array.from(Array(this.maxLength).keys()).map((e, i) => i + 65);
    this.alphabet = this.alpha.map((x) => String.fromCharCode(x));
    this.useUpperCase = useUpperCase;
  }  

  encrypt(text){
    let output = "";
    // x = (x + n) mod 26
    for(let x of text){
      if (x == " "){
        output += x;
        continue;
      } 
      let charIndex = (this.alphabet.indexOf(x) + this.shift) % this.maxLength;
      let char = this.alphabet[charIndex];

      if(this.useUpperCase) char = char.toUpperCase();

      output += char;
    }
    return output;
  }

  decrypt(cipher){
    let output = "";
    // x = (x + n) mod 26
    for(let x of cipher){
      if (x == " "){
        output += x;
        continue;
      } 
      let charIndex = (this.alphabet.indexOf(x) - this.shift) % this.maxLength;
      let char = this.alphabet[charIndex];

      if(this.useUpperCase) char = char.toUpperCase();

      output += char;
    }
    return output;
  }
}

const caesarCipher = new CaesarCipher(4, true);
let encrypted = caesarCipher.encrypt("CAESAR CIPHER");
let decrypt = caesarCipher.decrypt("GEIWEV GMTLIV");
console.log(decrypt)
