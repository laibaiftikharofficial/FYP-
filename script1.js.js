 // Dummy Data
 let newOrders = [
    { id: 1, customer: "John Doe", contact: "123456789", address: "123 Main St", items: "Pizza, Coke", total: "$15", payment: "Cash on Delivery" },
    { id: 2, customer: "Alice Brown", contact: "987654321", address: "456 Elm St", items: "Burger, Fries", total: "$10", payment: "Online Payment" },
    { id: 3, customer: "Michael Smith", contact: "555666777", address: "789 Oak Ave", items: "Pasta, Salad", total: "$12", payment: "Online Payment" }
];

let ongoingOrders = [];
let completedOrders = [];

// Load Orders on Page Load
window.onload = function() {
    loadOrders();
};

// Load orders into UI
function loadOrders() {
    document.getElementById("newOrdersList").innerHTML = "";
    document.getElementById("ongoingOrdersList").innerHTML = "";
    document.getElementById("completedOrdersList").innerHTML = "";

    newOrders.forEach(order => createOrderCard(order, "newOrdersList", true));
    ongoingOrders.forEach(order => createOrderCard(order, "ongoingOrdersList", false));
    completedOrders.forEach(order => createOrderCard(order, "completedOrdersList", false, true));
}

// Create Order Card with Icons
function createOrderCard(order, containerId, showPickUp, isCompleted = false) {
    let orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    orderCard.innerHTML = `
        <h5><i class="fas fa-receipt"></i> Order #${order.id}</h5>
        <p><i class="fas fa-user"></i> <strong>Customer:</strong> ${order.customer}</p>
        <p><i class="fas fa-phone"></i> <strong>Contact:</strong> ${order.contact}</p>
        <p><i class="fas fa-map-marker-alt"></i> <strong>Address:</strong> ${order.address}</p>
        <p><i class="fas fa-utensils"></i> <strong>Items:</strong> ${order.items}</p>
        <p><i class="fas fa-dollar-sign"></i> <strong>Total:</strong> ${order.total}</p>
        <p><i class="fas fa-wallet"></i> <strong>Payment:</strong> ${order.payment}</p>
        
        ${showPickUp ? `<button class="btn fill-button btn-small" onclick="markAsPickedUp(${order.id})">
            <i class="fas fa-motorcycle"></i> Picked Up
        </button>` : ""}
        ${!isCompleted ? `<button class="btn fill-button btn-small" onclick="markAsDelivered(${order.id})" ${showPickUp ? "disabled" : ""}>
            <i class="fas fa-check-circle"></i> Delivered
        </button>` : ""}
    `;

    document.getElementById(containerId).appendChild(orderCard);
}

// Move Order to Ongoing
function markAsPickedUp(orderId) {
    let orderIndex = newOrders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        let order = newOrders.splice(orderIndex, 1)[0];
        ongoingOrders.push(order);
    }
    loadOrders();
}

// Move Order to Completed
function markAsDelivered(orderId) {
    let orderIndex = ongoingOrders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        let order = ongoingOrders.splice(orderIndex, 1)[0];
        completedOrders.push(order);
    }
    loadOrders();
}

// Show Order Details in Modal
function viewOrderDetails(orderId) {
    let order = [...newOrders, ...ongoingOrders, ...completedOrders].find(o => o.id === orderId);
    let detailsContent = `
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Customer:</strong> ${order.customer} - ${order.contact}</p>
        <p><strong>Delivery Address:</strong> ${order.address}</p>
        <p><strong>Items:</strong> ${order.items}</p>
        <p><strong>Total Amount:</strong> ${order.total}</p>
        <p><strong>Payment Status:</strong> ${order.payment}</p>
    `;
    document.getElementById("orderDetailsContent").innerHTML = detailsContent;
    new bootstrap.Modal(document.getElementById("orderDetailsModal")).show();
}

// Refresh Orders (Simulated)
function refreshOrders() {
    alert("Orders Updated! (Currently using static data)");
    loadOrders();
}


    

//User
document.addEventListener('DOMContentLoaded', function() {
    // Sample data (in a real app, you would fetch this from an API)
    const sampleData = {
        customer: [
            { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", orders: 5, joinDate: "2023-01-15" },
            { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210", orders: 12, joinDate: "2022-11-03" },
            { id: 3, name: "Robert Johnson", email: "robert@example.com", phone: "5551234567", orders: 8, joinDate: "2023-02-20" }
        ],
        staff: [
            { id: 1, name: "Alice Brown", email: "alice@restaurant.com", role: "Chef", shift: "Morning", hireDate: "2021-05-10" },
            { id: 2, name: "Bob Wilson", email: "bob@restaurant.com", role: "Waiter", shift: "Evening", hireDate: "2022-03-15" },
            { id: 3, name: "Charlie Davis", email: "charlie@restaurant.com", role: "Manager", shift: "Full-time", hireDate: "2020-08-22" }
        ],
        rider: [
            { id: 1, name: "David Miller", email: "david@delivery.com", vehicle: "Motorcycle", deliveries: 45, status: "Active" },
            { id: 2, name: "Eva Garcia", email: "eva@delivery.com", vehicle: "Bicycle", deliveries: 32, status: "Active" },
            { id: 3, name: "Frank Lee", email: "frank@delivery.com", vehicle: "Scooter", deliveries: 28, status: "On Leave" }
        ]
    };

    // Get DOM elements
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const userTables = document.querySelectorAll('.user-table');

    // Handle dropdown selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const userType = this.getAttribute('data-type');
            
            // Update dropdown button text
            document.getElementById('userTypeDropdown').textContent = this.textContent;
            
            // Hide all tables
            userTables.forEach(table => table.classList.add('d-none'));
            
            // Show selected table
            document.getElementById(`${userType}Table`).classList.remove('d-none');
            
            // Load data into the table
            loadTableData(userType, sampleData[userType]);
        });
    });

    // Function to load data into a table
    function loadTableData(userType, data) {
        const tableBody = document.querySelector(`#${userType}Table tbody`);
        tableBody.innerHTML = '';
        
        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Create cells based on user type
            if (userType === 'customer') {
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.orders}</td>
                    <td>${item.joinDate}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">View</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                `;
            } else if (userType === 'staff') {
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.role}</td>
                    <td>${item.shift}</td>
                    <td>${item.hireDate}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">View</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                `;
            } else if (userType === 'rider') {
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.vehicle}</td>
                    <td>${item.deliveries}</td>
                    <td><span class="badge ${item.status === 'Active' ? 'bg-success' : 'bg-warning'}">${item.status}</span></td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">View</button>
                        <button class="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                `;
            }
            
            tableBody.appendChild(row);
        });
    }

    // Initialize with customer data by default
    document.querySelector('[data-type="customer"]').click();
});


// Optional JavaScript for additional functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to rows (optional)
    const tableRows = document.querySelectorAll('.table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // You could add functionality here, like opening a detail view
            console.log('Order clicked:', this.cells[2].textContent);
        });
    });
    
    // View All button functionality
    const viewAllBtn = document.querySelector('.btn-primary');
    viewAllBtn.addEventListener('click', function() {
        // You could implement logic to show all orders
        console.log('View All clicked');
        // window.location.href = '/all-orders';
    });
});

//sales
$(document).ready(function() {
    // Initialize DataTable
    var table = $('#data-table-1').DataTable({
        responsive: true,
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
        pageLength: 10,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search...",
            lengthMenu: "Show _MENU_ entries",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            paginate: {
                previous: '<i class="fas fa-chevron-left"></i>',
                next: '<i class="fas fa-chevron-right"></i>'
            }
        },
        dom: '<"top"<"row"<"col-md-6"l><"col-md-6"f>>>rt<"bottom"<"row"<"col-md-6"i><"col-md-6"p>>>',
        initComplete: function() {
            // Add custom classes after initialization
            $('.dataTables_length select').addClass('form-select form-select-sm');
            $('.dataTables_filter input').addClass('form-control form-control-sm');
        }
    });
    
    // Add custom styling to pagination buttons
    $('.dataTables_paginate').on('mouseover', 'a', function() {
        $(this).addClass('shadow-sm');
    }).on('mouseout', 'a', function() {
        $(this).removeClass('shadow-sm');
    });
    
    // Row click event
    $('#data-table-1 tbody').on('click', 'tr', function() {
        var data = table.row(this).data();
        console.log('Selected product:', data[1]); // Product Name
        // You could implement:
        // - Opening a detailed view
        // - Editing the product
        // - Showing more information
    });
    
    // Custom filter for status
    $('#status-filter').on('change', function() {
        var status = $(this).val();
        if (status === 'all') {
            table.search('').columns().search('').draw();
        } else {
            table.column(3).search(status).draw();
        }
    });
});