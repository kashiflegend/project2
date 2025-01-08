// Personalized Greeting
function greetUser() {
    var today = new Date();
    var hour = today.getHours();
    var greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    document.getElementById('greeting').innerText = greeting;
}

greetUser();

// Exit-Intent Popup
document.addEventListener('mouseout', function(e) {
    if (e.clientY < 10) {
        document.getElementById('exitPopup').style.display = 'block';
    }
});

function closePopup() {
    document.getElementById('exitPopup').style.display = 'none';
}
