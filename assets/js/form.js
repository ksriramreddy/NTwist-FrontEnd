let form = document.getElementById('contactForm');
let startTime;

form.addEventListener('focusin', (e) => {
  if (!startTime) {
    startTime = Date.now();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let duration = Math.round((Date.now() - startTime) / 1000);
  document.getElementById('confirmation').textContent = `Form submitted successfully in ${duration} seconds.`;
  form.reset();
  startTime = null;
});

function sortList() {
  let ul = document.getElementById('nameList');
  let items = Array.from(ul.getElementsByTagName('li'));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  ul.innerHTML = '';
  items.forEach(item => ul.appendChild(item));
}