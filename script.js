// No JavaScript is required unless you want to add functionality like logging the input
document.querySelector('.btn').addEventListener('click', () => {
  const query = document.querySelector('.input').value;
  console.log('Searching for:', query);
});

