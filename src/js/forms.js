// Form handling
export function setupForms() {
  const orderForm = document.getElementById('orderForm');
  if (!orderForm) return;

  orderForm.addEventListener('submit', handleOrderSubmit);
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const formInputs = e.target.querySelectorAll('input');
  let isValid = true;
  
  formInputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#000000';
    }
  });

  if (isValid) {
    showOrderConfirmation();
  } else {
    alert('PLEASE FILL OUT ALL FIELDS!');
  }
}

function showOrderConfirmation() {
  const popup = document.createElement('div');
  popup.className = 'order-popup';
  popup.innerHTML = `
    <div class="popup-content">
      <h2 class="rainbow-text">RADICAL!</h2>
      <img src="/console.gif" alt="GameMaster 2000" style="width: 200px;" />
      <p>Your order has been received!</p>
      <p>We'll contact you on your landline soon!</p>
      <div class="loading-bar"></div>
      <button class="button-3d close-popup">AWESOME!</button>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector('.close-popup').addEventListener('click', () => {
    popup.remove();
  });
}