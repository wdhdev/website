const sponsorsList = document.getElementById("sponsors-list");
const sponsorsLoader = document.getElementById("sponsors-loader");
const sponsorsLoaderPercentage = document.getElementById("sponsors-loader-percentage");
const sponsorsLoadingError = document.getElementById("loading-error");
const noSponsors = document.getElementById("no-sponsors");

fetch("https://ghs.vercel.app/v3/sponsors/wdhdev").then((res) => res.json()).then(async (data) => {
    let sponsors = [];

    if(data.sponsors.current !== null) sponsors = [...data.sponsors.current];
    if(data.sponsors.past !== null) sponsors = [...sponsors, ...data.sponsors.past];

    if(!sponsors.length) {
        sponsorsLoader.classList.add("hidden");
        noSponsors.classList.remove("hidden");
        return;
    }

    const avatars = [];

    await new Promise((resolve) => {
        let loaded = 0;

        const updatePercentage = async () => {
            const percentage = Math.round((loaded / sponsors.length) * 100);
            sponsorsLoaderPercentage.textContent = `Loading... ${percentage}%`;
        }

        for(const sponsor of sponsors) {
            const image = new Image();
            image.src = `https://avatars.githubusercontent.com/${sponsor.username}`;
            avatars.push(image);
        }

        avatars.forEach(async (image) => {
            if(image.complete) {
                loaded++;
                updatePercentage();
            } else {
                image.addEventListener("load", async () => {
                    loaded++;
                    updatePercentage();
                    if(loaded === avatars.length) resolve();
                })
            }
        })

        if(loaded === avatars.length) resolve();
    })

    sponsors.forEach(async (sponsor) => {
        let div = document.createElement("div");
        sponsorsList.appendChild(div);
        let li = document.createElement("li");
        div.appendChild(li);
        let div2 = document.createElement("div");
        li.appendChild(div2);
        let img = document.createElement("img");
        div2.appendChild(img);
        let div3 = document.createElement("div");
        div2.appendChild(div3);
        let h3 = document.createElement("h3");
        div2.appendChild(h3);
        let a = document.createElement("a");
        h3.appendChild(a);

        div.classList.add("p-2", "bg-[#11111199]", "rounded-md");

        div2.classList.add("flex", "items-center", "gap-x-2");

        img.classList.add("h-16", "rounded-md");
        img.src = avatars[sponsors.indexOf(sponsor)].src;
        img.alt = sponsor.username;
        img.draggable = false;

        h3.classList.add("text-base", "font-semibold", "leading-7", "tracking-tight", "text-pink-500", "hover:text-pink-600");

        a.href = `https://github.com/${sponsor.username}`;
        a.target = "_blank";
        a.textContent = sponsor.username;
    })

    sponsorsLoader.classList.add("hidden");
    sponsorsList.classList.remove("hidden");
}).catch(err => {
    console.error("Failed to load sponsors", err)
    sponsorsLoader.classList.add("hidden");
    sponsorsLoadingError.classList.remove("hidden");
})
