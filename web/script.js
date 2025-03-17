document.addEventListener("DOMContentLoaded", function () {
    const stripe = Stripe('your-publishable-key'); // Replace with your Stripe publishable key

    // Handle Payment
    document.getElementById('payButton').addEventListener('click', async () => {
        const response = await fetch('/create-checkout-session', { method: 'POST' });
        const session = await response.json();
        window.location.href = session.url; // Redirects to Stripe payment page
    });

    // Login Form Submission
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        alert(`Logging in with ${email}`);
    });

    // Register Form Submission
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        alert(`Registering with ${email}`);
    });

    // Forex Chart Example Data
    const ctx = document.getElementById('forexChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: 'EUR/USD',
                data: [1.10, 1.12, 1.15, 1.14, 1.18],
                borderColor: 'blue',
                borderWidth: 2
            }]
        }
    });
});
