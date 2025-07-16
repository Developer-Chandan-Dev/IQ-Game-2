const tds = document.querySelectorAll("td");
console.log(tds);

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", () => {
  const shuffledNumbers = shuffleArray(numbers);
  tds.forEach((td, index) => {
    td.textContent = shuffledNumbers[index];
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
