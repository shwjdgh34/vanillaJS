const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();
//fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000)
  };
  addData(newUser);
}
function addData(obj) {
  data.push(obj);
  updateDom();
}
function doubleMoney() {
  // data = data.map(user => {
  //   return { ...user, money: user.money * 2 };
  // });

  data.forEach(user => {
    user.money *= 2;
  });
  updateDom();
}
function updateDom(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> wealth</h2>';
  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatDollar(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// format number to dollar (https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string)
function formatDollar(num) {
  const p = num.toFixed(2).split('.');
  return (
    '$' +
    p[0]
      .split('')
      .reverse()
      .reduce((acc, num, i, orig) => {
        return num == '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}
function sortbyRichest() {
  data.sort((a, b) => {
    return b.money - a.money;
  });
  updateDom();
}

function showMillionaires() {
  data = data.filter(user => user.money >= 1000000);
  updateDom();
}
function calculateWealth() {
  const totalWealth = data.reduce(
    (acc, currentUser) => acc + currentUser.money,
    0
  );
  updateDom();
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3><strong>total</strong> ${formatDollar(
    totalWealth
  )}</h3>`;
  main.appendChild(wealthEl);
}
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortbyRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
