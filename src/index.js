
const textToWrite = 'Learn Anything, from Anywhere!'
const textElem = document.querySelector('.sh')

let currentChar = 0  

const writer = () => {
  
  textElem.innerHTML = textToWrite.slice(0, currentChar);

  currentChar +=1
  if (currentChar > textToWrite) {
    currentChar = 0;
  }
}

setInterval(writer, 80)