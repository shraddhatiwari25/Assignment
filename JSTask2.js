function alphabet(str) {
    var arr = str.split("");
    res = arr.sort().join("");
    return res;
  }
  
  console.log(alphabet("Ethnus MERN Externship"));