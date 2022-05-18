function LongestWord(sen) { 
    //used the regex match function which searches string 
    let arr = sen.match(/[a-z]+/gi); 
    // array sort function takes a function as a parameter
    // used to compare each element in the array to the
    // next element in the array
   let sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });
  
    return sorted[0];
           
  } 
  
  
     
  // keep this function call here 
  console.log(LongestWord(readline()));