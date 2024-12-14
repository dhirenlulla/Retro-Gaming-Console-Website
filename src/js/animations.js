// Animation utilities
export function setupCursorTrail() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-trail';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });
}

export function setupVisitorCounter() {
  let count = 1;
  setInterval(() => {
    const counter = document.getElementById('counter');
    if (counter) {
      count++;
      counter.textContent = count.toString().padStart(6, '0');
    }
  }, 10000);
}