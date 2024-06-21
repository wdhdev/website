const loader = document.getElementById("loader");

window.onload = async function() {
    // Fetch sponsors
    await fetchSponsors();

    // Wait for all images to load
    await new Promise((resolve) => {
        const images = document.querySelectorAll("img");
        let loaded = 0;
        images.forEach((image) => {
            if(image.complete) {
                loaded++;
            } else {
                image.addEventListener("load", () => {
                    loaded++;
                    if(loaded === images.length) {
                        resolve();
                    }
                })
            }
        })

        if(loaded === images.length) {
            resolve();
        }
    })

    loader.classList.add("loader-hidden");

    setTimeout(() => {
        loader.remove();
    }, 1000);
}
