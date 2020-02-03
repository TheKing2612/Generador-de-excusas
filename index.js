let who = ['Hola'];
let what = ['Como Estas' , 'Que Haces?' , 'Crush' , 'Te Quiero'];
let when = ['como te ha ido?' , 'nos podemos ver?' , '' , '' , ''];

let positionWho = Math.floor(Math.random() * who.length);
let positionWhat = Math.floor(Math.random() * what.length);
let positionWhen = Math.floor(Math.random() * when.length);

let frase = who [positionWho] + what [positionWhat] + when [positionWhen];

let escusa = document.getElementById("excuse");
escusa.innerHTML = frase;