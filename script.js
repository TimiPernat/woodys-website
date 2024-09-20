// Dropdown navigation bar menu links
document.getElementById("dropdown-button").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

// Show more tekst when clicking on 'Show more' button in about us section (mobile and tablet verzion)
function showMore() {
    // Prikaži drugi in tretji odstavek
    document.getElementById("more-text-1").classList.remove("hidden");
    document.getElementById("more-text-2").classList.remove("hidden");

    // Skrij povezavo "Pokaži več"
    document.getElementById("show-more").classList.add("hidden");

    // Prikaži povezavo "Pokaži manj"
    document.getElementById("show-less").classList.remove("hidden");
}

// Funkcija za skrivanje dodatnih odstavkov in prikaz "Pokaži več"
function showLess() {
    // Skrij drugi in tretji odstavek
    document.getElementById("more-text-1").classList.add("hidden");
    document.getElementById("more-text-2").classList.add("hidden");

    // Skrij povezavo "Pokaži manj"
    document.getElementById("show-less").classList.add("hidden");

    // Prikaži povezavo "Pokaži več"
    document.getElementById("show-more").classList.remove("hidden");
}

// Dogodek za "Pokaži več"
document.getElementById("show-more").addEventListener("click", function(event) {
    event.preventDefault();
    showMore();
});

// Dogodek za "Pokaži manj"
document.getElementById("show-less").addEventListener("click", function(event) {
    event.preventDefault();
    showLess();
});