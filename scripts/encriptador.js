// Objeto de claves para encriptación
const cryptKeys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

// Función para obtener clave de desencriptación
const inverseCryptKeys = (value) => 
    Object.keys(cryptKeys).find(key => cryptKeys[key] === value);

/* Funcion que encripta los mensajes */
const crypt = () => {
    let message = document.getElementById("message").value;
    let cryptedMessage = message.replace(/[eiaou]/g, match => cryptKeys[match]);
    let results = document.getElementById("results");

    /* Modifica y muestra los resultados */
    results.querySelector("h2").innerText = cryptedMessage;
    results.style.display = "flex";

    /* Oculta el mensaje de ningun mensaje fue encontrado */
    hideNoResults();

}

const decrypt = () => {
    let message = document.getElementById("message").value;
    let decryptedMessage = message.replace(/enter|imes|ai|ober|ufat/g, match => inverseCryptKeys(match));
    let results = document.getElementById("results");

    /* Modifica y muestra los resultados */
    results.querySelector("h2").innerText = decryptedMessage;
    results.style.display = "flex";

    /* Oculta el mensaje de ningun mensaje fue encontrado */
    hideNoResults();
}

const hideNoResults = () => {
    let results = document.getElementById("no-results");
    results.style.display = "none";
}