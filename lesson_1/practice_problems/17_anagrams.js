function anagram(word, list) {
  return list.filter(listWord => areAnagrams(listWord, word));
}

function areAnagrams(word1, word2) {
    let word1Chars = word1.split('');
    
    word2.split('').forEach(letter => {
      let idx = word1Chars.indexOf(letter);
      
      if (idx >= 0) {
        word1Chars.splice(idx, 1);
      }
    });
    
    return word1Chars.length === 0;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

/*
- filter each word in the list
- iterate from left to right for each letter in the word
  - if the letter exists, remove it from an array copy of the current word in the list
  - if we get to the end of the word and there are no more letters left in the array copy of the word then return true
*/