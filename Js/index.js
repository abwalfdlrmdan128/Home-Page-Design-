// Select all activity cards
const cards = document.querySelectorAll(".Protfolio .card");


cards.forEach((card) => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const desc = card.querySelector("p").innerText;
        const img = card.querySelector("img").getAttribute("src");

        // Save data in localStorage
        localStorage.setItem("activityTitle", title);
        localStorage.setItem("activityDesc", desc);
        localStorage.setItem("activityImg", img);

    
        window.location.href = "activity-details.html";
    });
});

