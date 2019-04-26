var elem = document.querySelector("#elem")
var row = document.getElementById("row")
var colom = document.getElementById("colom")
var button = document.getElementById("button")

button.addEventListener('click', function (parent, rows, cols) {
  var rows = parseInt(row.value)
  var cols = parseInt(colom.value)
  var table = document.createElement('table')

  for (var i = 0; i < rows; i += 1) {
    var tr = document.createElement('tr');

    for (var x = 1; x <= cols; x += 1) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  parent.appendChild(table)
})