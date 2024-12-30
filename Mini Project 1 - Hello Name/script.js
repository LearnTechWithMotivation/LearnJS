document.getElementsByClassName("clickMe")[0].addEventListener("click",
    () => {
        const nameInput = document.querySelector(".nameTaker");
        if (nameInput.hidden) {
            nameInput.hidden = false; // Unhide the nameInput
            setTimeout(() => nameInput.classList.add('show'), 0); // Add show class for transition
        } else {
            nameInput.classList.remove('show'); // Start hiding transition
            setTimeout(() => nameInput.hidden = true, 200); // Wait for transition to complete, then hide
        }
        // nameInput.hidden = !nameInput.hidden;
        console.log(nameInput)
    }
)
document.getElementById("name").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Detect Enter key
        let name = document.getElementById("name");
        document.getElementById("userName").innerText = name.value;
        name.value = "";

    }
});