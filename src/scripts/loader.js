window.onload = function() {
    const loader = document.getElementById("loader");

    loader.classList.add("loader-hidden");

    setTimeout(() => {
        loader.remove();
    }, 1000);
}
