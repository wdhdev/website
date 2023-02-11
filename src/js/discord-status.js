fetch("https://api.lanyard.rest/v1/users/853158265466257448")
    .then((res) => res.json())
    .then((res) => {
        document.getElementById("picture").classList.add(res.data.discord_status);

        switch (res.data.discord_status) {
            case "offline":
                document.getElementsByName("picture").style.border = "4px solid gray";
                break;
            case "idle":
                document.getElementsByName("picture").style.border = "4px solid yellow";
                break;
            case "dnd":
                document.getElementsByName("picture").style.border = "4px solid red";
                break;
            case "online":
                document.getElementsByName("picture").style.border = "4px solid lime";
                break;
        }
    })