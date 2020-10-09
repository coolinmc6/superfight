
// shuffle
const shuffle = (array) => array.sort(() => Math.random() -0.5).sort(() => Math.random() - 0.5);

// random selection
const getItems = ({ array, count }) => {

  const shuffled = shuffle(array);
  const nums = new Array(array.length).fill('').map((n, i) => i).sort(() => Math.random() - 0.5).slice(0, count);

  return shuffled.filter((n, i) => nums.includes(i))
}

// title case
function titleCase(str) {
  if (!str) return;
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

export { getItems, titleCase }