// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// BMI Calculator Logic (Optional)
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert height to meters
    const bmiResult = document.getElementById('bmi-result');

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        bmiResult.innerText = 'Please enter valid weight and height!';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    bmiResult.innerText = `Your BMI is ${bmi} (${bmiCategory})`;
}

// Event listener to trigger BMI calculation
document.getElementById('bmi-calculate-btn').addEventListener('click', calculateBMI);

// Form Validation (Example: Contact Form)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else {
        alert('Thank you for contacting us! We will get back to you soon.');
    }
});