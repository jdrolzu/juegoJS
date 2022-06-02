function gameMenu () {
    while (true) {
        //ASCII ART
        console.log("%c\nPresiona 1 para un jugador", "color: red; border-radius: 10px; border: solid 2px red");
        console.log("%cPresiona 2 para dos jugadores", "color: yellow; border-radius: 10px; border: solid 2px yellow");
        let numberPlayers = prompt("\nIngresa tu respuesta: ");
        switch (numberPlayers) {
            case "1":
                nameGamer1();
                break;
            case "2":
                nameGamer2();
                break;
            default:
                console.log("Ingresaste una opción inválida\n");
                break;
        }
    break;
    }
};

function nameGamer1() {
    while (true) {
        let userName = prompt("\nIngresa un nombre para comenzar a jugar:");
        let confirmName = prompt(`\n¡Hola ${userName}!\n¿Estás segur@ que '${userName}' es el nombre deseado? [Presiona S/N]`).toLowerCase();
        switch (confirmName) {
            case "s":
                startGame1();
                break;
            case "n":
                console.log("Intenta de nuevo...\n");
                break;
            default:
                console.log("¡Ingresaste una opción inválida!\n");
                break;
        }
    }
};

function nameGamer2() {
    while (true) {
        let userName1 = prompt("\nJugador(a) 1 ingresa un nombre para comenzar a jugar:");
        let confirmName1 = prompt(`\n¡Hola ${userName1}!\n¿Estás segur@ que '${userName1}' es el nombre deseado? [Presiona S/N]`).toLowerCase();
        if (confirmName1 === "s") {
            while (true) {
                let userName2 = prompt("\nJugador(a) 2 ingresa un nombre para comenzar a jugar: ");
                if (userName1 != userName2) {
                    let confirmName2 = prompt(`\n¡Hola ${userName2}!\n¿Estás segur@ que ${userName2} es el nombre deseado? [Presiona S/N]`).toLowerCase();
                    if (confirmName2 === "s") {
                        startGame2();
                        break;
                    }
                    else if (confirmName2 === "n") {
                        continue;
                    }
                }
                else if (userName1 === userName2) {
                    console.log("\nAmbos nombres son idénticos. Intenta de nuevo...");
                    continue;
                }
            }
        }
        else if (confirmName1 === "n") {
            continue;
        }
    }
};

//MAIN GAME1
function startGame1() {
    let intentos = 1;
    let objeto = ["cama", "mesa", "tv"];
    let randNumber = Math.floor(Math.random()*3);
    let objetoConLlave = objeto[randNumber];
    while (intentos <= 2) {
        console.log("%c\n¡Estás encerrad@ en una habitación y sólo tienes 2 intentos para encontrar la llave de salida!.\n","color: green; border-radius: 10px; border: solid 2px red");
        let intentoUsuario = prompt(`Intento ${intentos}: ¿En que objeto de la habitación buscarás la llave [cama, mesa ó tv]?: `).toLowerCase();
        if (intentoUsuario !== objetoConLlave) {
            console.log("%c\n¡Acá no está la llave!\n","color: blue; border-radius: 10px; border: solid 2px red");
            intentos++;
        }
        else {
            console.log("%c\n¡Encontraste la llave!","color: green; border-radius: 10px; border: solid 2px gray");
            console.log("%c¡Has logrado salir a tiempo!\n","color: green; border-radius: 10px; border: solid 2px gray");
            newGame();
        }
    }
    console.log("%c\n¡No has podido salir a tiempo!","color: red; border-radius: 10px; border: solid 2px red");
    newGame();   
};

function newGame(){
    let jugarNuevo = prompt("¿Deseas jugar otra vez? [Presiona S/N]").toLowerCase();
    if (jugarNuevo === "s") {
        gameMenu();
    }
    else{
        console.log("\n¡Hasta la próxima!\n");
        Deno.exit(1)
    }
};

//MAIN GAME2
function startGame2() {
    let intentosgamer1 = 1, intentosgamer2 = 1;
    let objeto = ["cama", "mesa", "tv", "sofa"];
    let randNumber = Math.floor(Math.random()*4);
    let objetoConLlave = objeto[randNumber];
    while (intentosgamer1 <= 3){
        console.log("%c\n¡Amb@s jugadores(as) están encerrad@s en una habitación. Quien primero encuentre la llave de salida, ganará la partida!.\n","color: green; border-radius: 10px; border: solid 2px red");
        //No sé como llamar a la variable userName1
        let intentoUsuario1 = prompt(`Jugador(a) 1...Intento ${intentosgamer1}: ¿En que objeto de la habitación buscarás la llave [cama, mesa ó tv]?: `).toLowerCase();
        if (intentoUsuario1 !== objetoConLlave) {
            console.log("%c\n¡Acá no está la llave!\n","color: blue; border-radius: 10px; border: solid 2px red");
            intentosgamer1++;
            while (intentosgamer2 <= 3) {
                //No sé como llamar a la variable userName2
                let intentoUsuario2 = prompt(`Jugador(a) 2...Intento ${intentosgamer2}: ¿En que objeto de la habitación buscarás la llave [cama, mesa ó tv]?: `).toLowerCase();
                if (intentoUsuario2 !== objetoConLlave) {
                    console.log("%c\n¡Acá no está la llave!\n","color: blue; border-radius: 10px; border: solid 2px red");
                    intentosgamer2++;
                    break;
                }
                else {
                    console.log("%c\n¡Encontraste la llave!\n","color: green; border-radius: 10px; border: solid 2px gray");
                    console.log("%c¡Jugador(a) 2 has ganado!\n","color: green; border-radius: 10px; border: solid 2px gray");
                    endGame();
                }
            }
        }
        else {
            console.log("%c\n¡Encontraste la llave!\n","color: green; border-radius: 10px; border: solid 2px gray");
            console.log("%c¡Jugador(a) 1 has ganado!\n","color: green; border-radius: 10px; border: solid 2px gray");
            endGame();
        }
    }
    console.log("%c¡Ninguno de l@s jugadores(as) pudo salir a tiempo!","color: red; border-radius: 10px; border: solid 2px gray");
    endGame();
}

export function endGame() {
    console.log("%c¡Fin del juego!\n","color: orange; border-radius: 10px; border: solid 2px gray");
    Deno.exit(1);
};

//Correr el juego
let a = gameMenu();
let b = nameGamer1();
let c = nameGamer2();
let d = startGame1();
let e = endGame();
