//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});

let slideIndex = 0;
let slides = document.querySelectorAll(".slides");
let dots = document.querySelectorAll(".dot");

function showSlides() {
    let i;

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add the "active" class to the corresponding dot
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Reset to the first slide if we're past the last one
    slides[slideIndex - 1].style.display = "block";  // Display current slide
    dots[slideIndex - 1].className += " active";  // Highlight current dot

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);  // Adjust the timing here (5000ms = 5 seconds)
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;  // Set slideIndex to the clicked dot's index
        showSlides();  // Update the slide and active dot
    });
});

// Call the function to start the slideshow
showSlides();




function loadDropdown() {
    // Fetch the JSON file
    fetch('../json/location.json')
        .then(response => response.json())  // Parse the JSON
        .then(data => {
            // Get the dropdown element
            const dropdown = document.getElementById("myDropdown");

            // Clear any existing options
            dropdown.innerHTML = "";

            // Add a default option
            const defaultOption = document.createElement("option");
            defaultOption.textContent = "Select an option";
            defaultOption.value = "";
            dropdown.appendChild(defaultOption);

            // Loop through the data and add each option to the dropdown
            data.forEach(item => {
                const option = document.createElement("option");
                option.value = item.id;  // Option value (could be any unique identifier)
                option.textContent = item.name;  // Option text
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
}

// Load the dropdown data when the page is loaded
window.onload = loadDropdown;