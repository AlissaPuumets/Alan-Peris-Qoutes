const url = "";

async function fetchMessages() {
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            this.location.reload();
        }
    });
    {
        const response = await fetch(url);
        const data = await response.json();
        const element = document.querySelector(".quote");
        element.innerHTML += "<p>" + data.quote + "</p>";
    }
}

fetchMessages()