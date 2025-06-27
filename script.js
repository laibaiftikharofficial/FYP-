
let text = "Make A Reservation";  // Your text here
let i = 0;
let speed = 100; // Adjust typing speed (milliseconds)
let msg = document.getElementById("reservationtitle");

function typeWriter() {
    if (i < text.length) {
        msg.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        msg.style.borderRight = "none"; // Remove cursor after typing
    }
}

// Start the effect when the page loads
window.onload = function() {
    typeWriter();
};
    function submitForm(event) {
        event.preventDefault();
        const firstName = document.querySelector('input[placeholder="First name"]').value;
        const lastName = document.querySelector('input[placeholder="Last name"]').value;
        const phone = document.querySelector('input[placeholder="Phone number"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const date = document.querySelector('input[type="date"]').value;
        const time = document.querySelector('input[type="time"]').value;
        const guests = document.querySelector('select').value;
        const eventType = document.querySelectorAll('select')[1].value;

        let valid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });

        if (!firstName) {
            document.getElementById('firstNameError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('firstNameError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (!lastName) {
            document.getElementById('lastNameError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('lastNameError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('emailError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('emailError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (!date) {
            document.getElementById('dateError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('dateError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (!time) {
            document.getElementById('timeError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('timeError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (guests === "No. of guests") {
            document.getElementById('guestsError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('guestsError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (eventType === "Choose event") {
            document.getElementById('eventError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('eventError').style.display = 'none';
            }, 3000);
            valid = false;
        }
        if (!phone.match(/^\d{10}$/) && !phone.match(/^\d{11}$/)) {
            document.getElementById('phoneError').style.display = 'block';
            setTimeout(() => {
                document.getElementById('phoneError').style.display = 'none';
            }, 3000);
            valid = false;
        }

        if (!valid) {
            return;
        }

        alert(`Booking Details:\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nEvent: ${eventType}`);
        document.querySelector('form').reset();
    }