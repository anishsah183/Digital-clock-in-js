
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
