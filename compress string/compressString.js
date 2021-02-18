const compress = (str) => {
  let result = [];
  let last = undefined;

  for (const char of str) {
    if (last === char) {
      result[result.length - 1]++;
    } else {
      result.push(char);
      result.push(1);
      last = char;
    }
  }
  return result.join('');
};

console.log(compress('AAABCCDDDD'));
//prints A3B1C2D4
console.log(compress('aaabbcdddddddddddddddddddaa'));
//prints a3b2c1d19a2