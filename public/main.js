/* globals fetch */
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('rasmtables', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darice Corey-Gilbert',
      'quote': 'Congratulations! You did it!'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})

del.addEventListener('click', function () {
  fetch('rasmtables', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Darice Corey-Gilbert'
    })
  }).then(function (response) {
    window.location.reload()
  })
})

