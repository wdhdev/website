const loader = document.getElementById("loader");
const loaderPercentage = document.getElementById("loader-percentage");

window.onload = async function() {
    // Fetch sponsors
    await fetchSponsors();

    // Wait for all images to load
    await new Promise((resolve) => {
        const images = document.querySelectorAll("img");

        let loaded = 0;

        const updatePercentage = async () => {
            const percentage = Math.round((loaded / images.length) * 100);
            loaderPercentage.textContent = `${percentage}%`;
        }

        images.forEach(async (image) => {
            if(image.complete) {
                loaded++;
                updatePercentage();
            } else {
                image.addEventListener("load", async () => {
                    loaded++;
                    updatePercentage();
                    if(loaded === images.length) resolve();
                })
            }
        })

        if(loaded === images.length) resolve();
    })

    document.body.style.overflow = "auto";
    loader.classList.add("loader-hidden");

    setTimeout(() => {
        loader.remove();
    }, 1000)
}
