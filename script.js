// Dropdown navigation bar menu links
document.getElementById("dropdown-button").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

// Show more tekst when clicking on 'Show more' button in about us section (mobile and tablet verzion)
function showMore() {
    document.getElementById("more-text-1").classList.remove("hidden");
    document.getElementById("more-text-2").classList.remove("hidden");

    document.getElementById("show-more").classList.add("hidden");

    document.getElementById("show-less").classList.remove("hidden");
}

// Funkcija za skrivanje dodatnih odstavkov in prikaz "Pokaži več"
function showLess() {
    document.getElementById("more-text-1").classList.add("hidden");
    document.getElementById("more-text-2").classList.add("hidden");

    document.getElementById("show-less").classList.add("hidden");

    document.getElementById("show-more").classList.remove("hidden");
}

document.getElementById("show-more").addEventListener("click", function(event) {
    event.preventDefault();
    showMore();
});

document.getElementById("show-less").addEventListener("click", function(event) {
    event.preventDefault();
    showLess();
});

// Funcionality for wagyu section show more and show less
document.addEventListener("DOMContentLoaded", function() {
    // Pridobi elemente za sekcijo wagyu
    const showMoreLinkWagyu = document.getElementById("show-more-2");
    const showLessLinkWagyu = document.getElementById("show-less-2");
    const wagyuParagraphs = document.querySelectorAll("#wagyu .display-text.hidden");
    const wagyuImages = document.querySelectorAll('#wagyu img.hidden');

    // Funkcija za prikaz skritih elementov v wagyu sekciji
    showMoreLinkWagyu.addEventListener("click", function(e) {
        e.preventDefault(); // Prepreči privzeto delovanje

        // Prikaži vse skrite <p> elemente v sekciji wagyu
        wagyuParagraphs.forEach((p) => {
            p.classList.remove("hidden");
        });

        // Prikaži vse skrite slike v sekciji wagyu
        wagyuImages.forEach((img) => {
            img.classList.remove("hidden");
        });

        // Skrij povezavo "Pokaži več" in prikaži "Pokaži manj"
        showMoreLinkWagyu.classList.add("hidden");
        showLessLinkWagyu.classList.remove("hidden");
    });

    // Funkcija za skrivanje elementov v wagyu sekciji
    showLessLinkWagyu.addEventListener("click", function(e) {
        e.preventDefault(); // Prepreči privzeto delovanje

        // Skrij vse <p> elemente in slike v sekciji wagyu
        wagyuParagraphs.forEach((p) => {
            p.classList.add("hidden");
        });

        // Skrij vse slike
        wagyuImages.forEach((img) => {
            img.classList.add("hidden");
        });

        // Skrij povezavo "Pokaži manj" in prikaži "Pokaži več"
        showLessLinkWagyu.classList.add("hidden");
        showMoreLinkWagyu.classList.remove("hidden");
    });
});
