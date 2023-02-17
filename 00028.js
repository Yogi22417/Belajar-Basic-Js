// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(kalimat) {
  let indexA = 0;
  let indexB = 0;
  let split = kalimat.split('');
  for(let i = 0; i <= split.length-1 ; i++){
    if(split[i] == 'a'){indexA = i}
    if(split[i] == 'b'){indexB = i}
    if(Math.abs(indexA - indexB) > 3){
      return true
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false