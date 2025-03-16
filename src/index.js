document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
  handleToDo(e.target.querySelector('#new-task-description').value)
  form.reset()
})
});

function handleToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', doDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}


function doDelete(e) {
  e.target.parentNode.remove()
}