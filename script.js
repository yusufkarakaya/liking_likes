const neil = document.getElementById('neil');
const jim = document.getElementById('jim');
const nichole = document.getElementById('nichole');

const neilButton = document.getElementById('neilBtn');
const jimButton = document.getElementById('jimBtn');
const nicholeButton = document.getElementById('nicholeBtn');

const postArr = [4, 9, 13];

neilButton.addEventListener('click', () => {
  neil.innerHTML = `${postArr[0]++} like(s)`;
});

jimButton.addEventListener('click', () => {
  jim.innerHTML = `${postArr[1]++} like(s)`;
});

nicholeButton.addEventListener('click', () => {
  nichole.innerHTML = `${postArr[2]++} like(s)`;
});
