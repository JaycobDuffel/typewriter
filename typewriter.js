let sentence = "hello there from lighthouse labs";
const characters = sentence.split('');

const typeWrite = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    ((i) => {
      setTimeout(() => {
        process.stdout.write(arr[i])
        if (i === arr.length - 1) {
          process.stdout.write("\n")

        }
      }, 70 * i);
    })
      (i);
  }

}

typeWrite(characters);
