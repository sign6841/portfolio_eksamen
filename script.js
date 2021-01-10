window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");


    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("h2").classList.add("flyv");

}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#links").classList.toggle("hidden");

    let erSkjult = document.querySelector("#links").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰"
    } else {
        document.querySelector("#menuknap").textContent = "×"
    }
}
