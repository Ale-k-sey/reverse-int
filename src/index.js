module.exports = function reverse (n) {
  let str = Math.abs(Number(n));
  str = String(str);
  
  let i = str.length - 1;
      let result = "";
      
      while (i >= 0) {
        result = (result + str[i]);
        i = i - 1;
      }
      return (result); 
}
