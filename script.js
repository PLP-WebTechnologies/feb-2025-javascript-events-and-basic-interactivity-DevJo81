// Button click event
function showAlert() {
    const button = document.getElementById('myBtn');
    button.addEventListener('click', () => {
        alert('Thanks for checking out my art page!');
        console.log('User clicked the alert button on the page');
        button.style.backgroundColor ='lightcoral';
    });
}



// Hover effect
const button = document.getElementById('submitBtn');
button.onclick = function() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor= 'lightblue';
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor= 'lightgrey';
    });
};



// Image gallery 
const images = [
    "https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/14970389/pexels-photo-14970389/free-photo-of-photo-of-abstract-painting-on-canvas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2983262/pexels-photo-2983262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/5757074/pexels-photo-5757074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];
let currentImage = 0;
const galleryImage = document.getElementById("galleryImage");

document.getElementById("prevBtn").addEventListener("click", () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    galleryImage.src = images[currentImage];
});

document.getElementById("loadMoreBtn").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    galleryImage.src = images[currentImage];
});



// Toggle element visibility
function toggleElement() {
    const button = document.getElementById("toggleBtn");
    const text = document.getElementById("toggleText");
    button.addEventListener("click", () => {
        if (text.style.display === "none") {
            text.style.display = "block";
            button.textContent = "Hide Text";       
        } else {
            text.style.display = "none";
            button.textContent = "Hire Me";
        }
    });
};



// Modal functionality, Accordion styles and Keypress event
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = function() {
    modal.style.display = "block";
};

closeModal.onclick = function() {
    modal.style.display = "none";
};


const toggles = document.querySelectorAll(".accordionToggle");
toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});


const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");
keyInput.addEventListener("keyup", (event) => {
    keyOutput.textContent = `You pressed: ${event.key}`;
});



// Form validation 
const input = document.getElementById('name');
const display = document.getElementById('nameDisplay');
input.onchange = function() {
    display.textContent = `Hello, ${input.value}!`;
};


const form = document.getElementById('contactForm');
const email= document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    if (!email.value.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = 'Thank you for your submission!';
        errorMessage.style.color = 'green';
        form.reset();
    }
};


const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
password.onchange = function() {
    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.color = 'red';
    } else {
        passwordError.textContent = '';
    }
};