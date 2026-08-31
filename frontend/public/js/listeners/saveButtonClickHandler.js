import { userUpdateApi } from "../api/userUpdateApi.js";
import listUserRender from "../render/listUserRender.js";

export default async function saveButtonClickHandler(event) {

    const liElement = event.currentTarget.parentElement.parentElement;
    const infoElement = liElement.querySelector("div");

    const inputs = infoElement.querySelectorAll("input");

    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();

    if (!name || !email) {
        alert("Nome e email são obrigatórios.");
        return;
    }

    await userUpdateApi(liElement.userId, {
        name,
        email
    });

    await listUserRender();
}