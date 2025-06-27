

  // Orders chart
  new Chart(document.getElementById('ordersLineChart'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        data: [200, 220, 250, 240, 290],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { display: false }, x: { display: false } },
      elements: { point: { radius: 0 } },
      responsive: true
    }
  });

  // Revenue chart
  new Chart(document.getElementById('revenueLineChart'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        data: [7000, 8000, 8200, 7800, 9000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { display: false }, x: { display: false } },
      elements: { point: { radius: 0 } },
      responsive: true
    }
  });

  // New customers chart
  new Chart(document.getElementById('customersLineChart'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        data: [40, 50, 45, 60, 55],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { display: false }, x: { display: false } },
      elements: { point: { radius: 0 } },
      responsive: true
    }
  });

  // Operations chart (already included previously)
  new Chart(document.getElementById('operationsLineChart'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{
        data: [60, 70, 65, 80, 90],
        borderColor: 'rgba(166, 44, 44, 1)',
        backgroundColor: 'rgba(166, 44, 44, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { display: false }, x: { display: false } },
      elements: { point: { radius: 0 } },
      responsive: true
    }
  });




  function showSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.section');
    allSections.forEach(sec => sec.style.display = 'none');

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
      sectionToShow.scrollIntoView({ behavior: 'smooth' });
    }
  }

  


  let total = 0;

function addToOrder(itemName, price) {
const orderList = document.getElementById('orderList');

// Create list item for order
const listItem = document.createElement('li');
listItem.textContent = `${itemName} - $${price}`;
orderList.appendChild(listItem);

// Update total
total += price;
document.getElementById('totalAmount').textContent = total.toFixed(2);
}

function processPayment() {
if (total === 0) {
  alert("Your order is empty!");
} else {
  alert(`Thank you! Your payment of $${total.toFixed(2)} was processed successfully.`);
  resetOrder();
}
}

function resetOrder() {
document.getElementById('orderList').innerHTML = '';
total = 0;
document.getElementById('totalAmount').textContent = total.toFixed(2);
}




