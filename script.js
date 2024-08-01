
const card = document.getElementsByClassName('card');

for (let key of card) {
    key.addEventListener('click', (ev) => {
    console.log('click', ev.target);
  })
}
