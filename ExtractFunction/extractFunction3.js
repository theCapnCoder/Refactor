function toTitleCaseTest(str) {
  const words = str.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return capitalizedWords.join(' ');
}

// Refactor Extract Function

function toTitleCase(str) {
  const words = str.split(' ');
  const capitalizedWords = capitalizedWord(words);

  return capitalizedWords.join(' ');
}

function capitalizedWord(arr){
  const capitalizedWords = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return capitalizedWords;
}