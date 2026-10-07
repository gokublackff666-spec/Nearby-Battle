const homeScreen = document.getElementById("homeScreen");
const connectionScreen = document.getElementById("connectionScreen");

const connectBtn = document.getElementById("connectBtn");
const backBtn = document.getElementById("backBtn");
const cancelSearch = document.getElementById("cancelSearch");

const connectionStatus = document.getElementById("connectionStatus");
const connectionDot = document.getElementById("connectionDot");

const gameCards = document.querySelectorAll(".game-card");


/* -----------------------------
   SCREEN NAVIGATION
----------------------------- */

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach((item) => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


/* -----------------------------
   NEARBY SEARCH
----------------------------- */

function startNearbySearch() {
    showScreen(connectionScreen);

    connectionStatus.textContent =
        "Looking for nearby players...";

    connectionDot.style.background = "#f59e0b";

    console.log("Nearby search started");
}


function stopNearbySearch() {
    showScreen(homeScreen);

    connectionStatus.textContent =
        "Looking for nearby players";

    connectionDot.style.background = "#555";

    console.log("Nearby search stopped");
}


/* -----------------------------
   BUTTON EVENTS
----------------------------- */

connectBtn.addEventListener("click", () => {
    startNearbySearch();
});


backBtn.addEventListener("click", () => {
    stopNearbySearch();
});


cancelSearch.addEventListener("click", () => {
    stopNearbySearch();
});


/* -----------------------------
   GAME SELECTION
----------------------------- */

gameCards.forEach((card) => {

    card.addEventListener("click", () => {

        const game = card.dataset.game;

        console.log("Selected game:", game);

        connectionStatus.textContent =
            `Selected: ${game}`;

        startNearbySearch();
    });

});


/* -----------------------------
   INITIAL STATE
----------------------------- */

connectionDot.style.background = "#555";

console.log("Nearby Battle loaded successfully.");
