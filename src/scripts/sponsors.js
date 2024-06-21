const sponsorsList = document.getElementById("sponsors-list");
const sponsorLoader = document.getElementById("sponsors-loader");
const sponsorLoadingError = document.getElementById("loading-error");
const noSponsors = document.getElementById("no-sponsors");

async function fetchSponsors() {
    await fetch("https://ghs.vercel.app/v3/sponsors/wdhdev").then((res) => res.json()).then(async (data) => {
        const sponsors = data.sponsors.current;

        if(sponsors == null || sponsors.length === 0) {
            sponsorLoader.classList.add("hidden");
            noSponsors.classList.remove("hidden");
            return;
        }

        await sponsors.forEach(async (sponsor) => {
            // <div class="p-2 bg-[#11111199] rounded-md">
            let div = document.createElement("div");
            sponsorsList.appendChild(div);
            // <li>
            let li = document.createElement("li");
            div.appendChild(li);
            // <div class="flex items-center gap-x-6">
            let div2 = document.createElement("div");
            li.appendChild(div2);
            // <img class="h-18 w-32 rounded-md">
            let img = document.createElement("img");
            div2.appendChild(img);
            // <div>
            let div3 = document.createElement("div");
            div2.appendChild(div3);
            // <h3 class="text-base font-semibold leading-7 tracking-tight text-pink-500 hover:text-pink-600">
            let h3 = document.createElement("h3");
            div2.appendChild(h3);
            // <a href="https://github.com/${sponsor.username" target="_blank">${sponsor.username}</a>
            let a = document.createElement("a");
            h3.appendChild(a);

            div.classList.add("p-2", "bg-[#11111199]", "rounded-md");

            div2.classList.add("flex", "items-center", "gap-x-2");

            img.classList.add("h-16", "rounded-md");
            img.src = `https://avatars.githubusercontent.com/${sponsor.username}`;
            img.alt = sponsor.username;
            img.draggable = false;

            h3.classList.add("text-base", "font-semibold", "leading-7", "tracking-tight", "text-pink-500", "hover:text-pink-600");

            a.href = `https://github.com/${sponsor.username}`;
            a.target = "_blank";
            a.textContent = sponsor.username;
        })

        sponsorLoader.classList.add("hidden");
        sponsorsList.classList.remove("hidden");
    }).catch(err => {
        console.error("Failed to load sponsors", err)
        sponsorLoader.classList.add("hidden");
        sponsorLoadingError.classList.remove("hidden");
    })
}
