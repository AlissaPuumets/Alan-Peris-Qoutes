const url = "https://www.affirmations.dev/";

async function fetchMessage() {
    try {
        const response = await fetch(url); // Fetch one affirmation
        const data = await response.json();
        const element = document.getElementById("affirmation-text"); // Get p tag
        element.textContent = data.affirmation; // Update with new affirmation
    } catch (error) {
        console.error("Error fetching affirmation:", error); // Handle fetch errors
    }
}

// Add event listener to button
document.getElementById("new-affirmation-btn").addEventListener("click", fetchMessage);