let finalMessage = "";

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

// Función para verificar si el texto es válido
const validateText = (text) => /^[a-z\s]+$/.test(text);

/* Funcion que se encarga de procesar el mensaje para verificar que cumpla con las condiciones */
const process = (action) => {
    let message = document.getElementById("message").value.trim();
    
    if (message === "") {
        alertElement("info", "red", "El mensaje no puede estar vacío.");
        return;
    }

    if (!validateText(message)) {
        alertElement("info", "red", "Solo letras minúsculas y sin acentos.");
        return;
    }

    action === "crypt" ? crypt(message) : decrypt(message);
}

/* Función que encripta los mensajes */
const crypt = (message) => {
    let cryptedMessage = message.replace(/[eiaou]/g, match => cryptKeys[match]);
    displayResult(cryptedMessage);
}

/* Función que desencripta el mensaje */
const decrypt = (message) => {
    let decryptedMessage = message.replace(/enter|imes|ai|ober|ufat/g, match => inverseCryptKeys(match));
    displayResult(decryptedMessage);
}

/* Función para copiar el mensaje */
const copyMessage = () => {
    navigator.clipboard.writeText(finalMessage);
    alert("¡Mensaje copiado con éxito!");
}

/* Esta función modifica elementos cambiando su color y su mensaje dependiendo de cómo sea requerido */
const alertElement = (element, color, alertMsg) => {
    let elem = document.getElementById(element);
    elem.innerHTML = alertMsg;
    elem.style.color = color;
}

/* Esta función muestra el resultado y oculta el mensaje por defecto */
const displayResult = (message) => {
    let results = document.getElementById("results");
    document.getElementById("results-message").innerText = message;
    finalMessage = message;
    results.style.display = "flex";
    hideNoResults();
}

/* Esta función oculta el mensaje por defecto del encriptador */
const hideNoResults = () => {
    let results = document.getElementById("no-results");
    results.style.display = "none";
}
