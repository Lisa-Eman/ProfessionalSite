// Native disclosure controls keep experience accessible without JavaScript.
document.getElementById('year').textContent = new Date().getFullYear();
const roles = [...document.querySelectorAll('details')];
let previouslyOpen = [];
window.addEventListener('beforeprint', () => {
  previouslyOpen = roles.map(role => role.open);
  roles.forEach(role => { role.open = true; });
});
window.addEventListener('afterprint', () => {
  roles.forEach((role, index) => { role.open = previouslyOpen[index] ?? false; });
});
