const form = document.querySelector('form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');
  
  span.textContent = taskText;
  deleteButton.textContent = '✕';

  li.appendChild(span);
  li.appendChild(deleteButton);

  span.addEventListener('click', function () {
  span.classList.toggle('completed');
  });

  deleteButton.addEventListener('click', function (event) {
    event.stopPropagation();
    li.remove();
  });


  list.appendChild(li);
  input.value = '';
  input.focus();
});
