export default function editNameList(liElement) {

    const currentName = liElement.firstChild.textContent.trim();

    const inputElement = document.createElement("input");

    inputElement.setAttribute("type", "text");

    inputElement.setAttribute("value", currentName);

    const buttonAlterElement = document.createElement("button");

    buttonAlterElement.innerText = "Alterar";

    buttonAlterElement.classList.add("btn", "btn-primary", "btn-sm");

    buttonAlterElement.addEventListener("click", (event) => {

        event.preventDefault();

        const newName = inputElement.value.trim();

        if (newName === "") {
            return;
        }

        liElement.firstChild.remove();

        liElement.prepend(document.createTextNode(newName));

        buttonAlterElement.remove();
    });

    inputElement.addEventListener("keypress", (event) => {

        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();

        buttonAlterElement.dispatchEvent(new Event("click"));
    });

    liElement.firstChild.remove();

    liElement.prepend(inputElement);

    liElement.append(buttonAlterElement);
}