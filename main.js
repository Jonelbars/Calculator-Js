const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    localStorage.setItem('nightMode', body.classList.contains('light-mode'));
});

// Check night mode status on page load
const nightMode = localStorage.getItem('nightMode');
if (nightMode === 'true') {
    body.classList.add('light-mode');
}

function appendToInput(value) {
  document.getElementById("input").value += value;
}

function clearInput() {
  document.getElementById("input").value = " ";
}

function calculate() {
  var input = document.getElementById("input").value;
  var result = eval(input);
  document.getElementById("input").value = result;
}

