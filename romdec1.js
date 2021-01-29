
var grego;
var tamanho = 0;
var res = 0;
var gravar;

grego = prompt("Digite o valor em numero romano");
gravar = grego.toUpperCase();
grego = grego.toLowerCase();
tamanho = grego.length;
grego = grego.split("");
var indice = 0;
var maior = 0;
for (i = 0; i < tamanho; i++) {
    if (grego[i] == "m") {
        grego[i] = 1000;
    }
    if (grego[i] == "d") {
        grego[i] = 500;
    }
    if (grego[i] == "c") {
        grego[i] = 100;
    }
    if (grego[i] == "l") {
        grego[i] = 50;
    }
    if (grego[i] == "x") {
        grego[i] = 10;
    }
    if (grego[i] == "v") {
        grego[i] = 5;
    }
    if (grego[i] == "i") {
        grego[i] = 1;
    }

    if (grego[i] > maior) {
        indice = i;
        maior = grego[i];
        res = maior;
    }
}

for (i = 0; i < tamanho; i++) {
    if (grego[i] <= maior && i > indice) {
        res = res + grego[i];
    }
    if (grego[i] < maior && i < indice) {
        res = res - grego[i];
    }
}

alert("O numero romano " + gravar + " é igual a " + res + " em decimal.");