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
    if (message == ""){
        alertElement("info", "red", "El mensaje no puede estár vacio.");
        return;
    }else{
        alertElement("info", "#495057", "Solo letras minúsculas y sin acentos.");
    }
    if(!validateText(message)){
        alertElement("info", "red", "Solo letras minúsculas y sin acentos.");
        return;
    }
    action == "crypt" ? crypt(message) : decrypt(message)

}
/* Funcion que encripta los mensajes */
const crypt = (message) => {

    let cryptedMessage = message.replace(/[eiaou]/g, match => cryptKeys[match]);
    let results = document.getElementById("results");

    /* Modifica y muestra los resultados */
    document.getElementById("results-message").innerText = cryptedMessage;
    finalMessage = cryptedMessage;
    results.style.display = "flex";

    /* Oculta el mensaje de ningun mensaje fue encontrado */
    hideNoResults();

}

/* Funcion que se encarga de desencriptar el mensaje */
const decrypt = (message) => {
    
    let decryptedMessage = message.replace(/enter|imes|ai|ober|ufat/g, match => inverseCryptKeys(match));
    let results = document.getElementById("results");

    /* Modifica y muestra los resultados */
    document.getElementById("results-message").innerText = decryptedMessage;
    finalMessage = decryptedMessage;
    results.style.display = "flex";

    /* Oculta el mensaje de ningun mensaje fue encontrado */
    hideNoResults();
}

const copyMessage = () =>{
    navigator.clipboard.writeText(finalMessage);
    alert("Mensaje copiado con exito!");
}

/* Esta funcion modifica elementos cambiando su color y su mensaje dependiendo de como sea requerido */
const alertElement = (element, color, alertMsg) => {
    let elem = document.getElementById(element);
    elem.innerHTML = alertMsg;
    elem.style.color = color;
    return;
}

/* Esta funcion oculta el mensaje por defecto del encriptador */
const hideNoResults = () => {
    let results = document.getElementById("no-results");
    results.style.display = "none";
}