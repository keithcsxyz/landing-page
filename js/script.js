
function toggleMode() {
    const body = document.body;
    const toggleButton = document.getElementById('toggleButton');
    const typingElement = document.getElementById("welcome-text");
  
    if (body.classList.contains("bg-dark")) {
      // Switch to Light Mode
      body.classList.remove("bg-dark", "text-light");
      body.classList.add("bg-light", "text-dark");
      toggleButton.textContent = "Dark Mode";
      typingElement.style.color = "black"; // Force black text
    } else {
      // Switch to Dark Mode
      body.classList.remove("bg-light", "text-dark");
      body.classList.add("bg-dark", "text-light");
      toggleButton.textContent = "Light Mode";
      typingElement.style.color = "white"; // Force white text
    }
  }
  

// Add event listener to the button
toggleButton.addEventListener('click', toggleMode);



//see moreee
document.getElementById("seeMoreBtn").addEventListener("click", function() {
    let moreProducts = document.getElementById("more-products");
    if (moreProducts.style.display === "none") {
        moreProducts.style.display = "flex";
        this.textContent = "See Less";
    } else {
        moreProducts.style.display = "none";
        this.textContent = "See More";
    }
});



/////////////////////////////////FOR LETTER BY LETTER TYPING EFFECT////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
    const text = "Landing Page";
    const speed = 100; // Speed of typing (in milliseconds)
    const delay = 1000; // Delay before repeating (1 second)
    let index = 0;
    let isDeleting = false;
    const textElement = document.getElementById("welcome-text");

    function typeEffect() {
        if (!isDeleting) {
            textElement.innerHTML = text.slice(0, index + 1);
            index++;
            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeEffect, delay); // Pause before deleting
                return;
            }
        } else {
            textElement.innerHTML = text.slice(0, index - 1);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        }
        setTimeout(typeEffect, speed);
    }

    typeEffect(); // Start animation
});


// Function to update text color based on mode
function updateTextColor() {
    const body = document.body;
    const typingElement = document.getElementById("welcome-text");
  
    if (body.classList.contains("bg-dark")) {
      typingElement.style.color = "white"; // White text in dark mode
    } else {
      typingElement.style.color = "black"; // Black text in light mode
    }
  }
  
  // Start typing effect after page loads
  window.onload = () => {
    updateTextColor(); // Set correct color before typing
    typeLetter();
  };




/////////////////////////////////////////////////////////////////////////////////////////////////////////

