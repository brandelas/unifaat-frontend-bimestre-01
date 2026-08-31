import saveButtonClickHandler from "./saveButtonClickHandler.js";

export default function editButtonClickHandler(event) {
    const liElement = event.currentTarget.closest("li");

    const infoElement = liElement.querySelector("div");

    const nameElement = infoElement.querySelector("span");
    const emailElement = infoElement.querySelector("small");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("form-control", "mb-2");
    nameInput.value = nameElement.innerText;

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.classList.add("form-control");
    emailInput.value = emailElement.innerText;

    infoElement.innerHTML = "";
    infoElement.append(nameInput, emailInput);

    const buttonsElement = liElement.querySelector(".d-flex.gap-2");

    const buttonEditElement = buttonsElement.querySelector(".btn-primary");
    buttonEditElement.innerText = "Salvar";
    buttonEditElement.removeEventListener("click", editButtonClickHandler);
    buttonEditElement.addEventListener("click", saveButtonClickHandler);
}