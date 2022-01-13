/*
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/
function add(quantidade, elemento) {

    const vetor = [];

    while(quantidade > 0) {
        vetor.push(elemento);
        quantidade--;
    }

    return vetor;
}

console.log(add(3, 'a'));

/*
2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/
function reverse(vetor) {

    const vetorInvertido = [];

    for(let i = vetor.length - 1; i >= 0; i--) {
        vetorInvertido.push(vetor[i]);
    }

    return vetorInvertido;
}

console.log(reverse([1,2,3,4]));

/*
3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
*/
function clear(vetor) {

    let indice = 0;

    while(true) {
        switch(vetor[indice]) {
            case '':
            case 0:
            case null:
            case false:
            case undefined:
                vetor.splice(indice, 1);
                break;
            default:
                indice++;
        }
    
        if(indice === vetor.length) {
            break;
        }
    }

    return vetor;
}

console.log(clear([1,2,'', undefined]));

/*
4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
*/
function arrayToObject(vetor) {

    let objeto = {};

    vetor.forEach((subvetor) => {
        objeto[subvetor[0]] = subvetor[1];
    });

    return objeto;
}

console.log(arrayToObject([["c",2], ["d",4]]));

/*
5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
   Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
*/
function remover(vetor, ...elementos) {
    
    elementos.forEach((valor) => {
        while(true) {

            const indice = vetor.indexOf(valor);

            if(indice === -1) {
                break;
            } else {
                vetor.splice(indice, 1);
            }
        }
    });

    return vetor;
}

console.log(remover([5,4,3,2,5], 5,3));

/*
6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/
function removerElementosDuplicados(vetor) {

    const vetorLimpo = [];

    vetor.forEach((elemento) => {
        
        const indice = vetorLimpo.indexOf(elemento);
        if(indice === -1) {
            vetorLimpo.push(elemento);
        }
    });

    return vetorLimpo;
}

console.log(removerElementosDuplicados([1,2,3,3,2,4,5,4,7,3]));

/*
7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
*/
function equals(vetor1, vetor2) {

    if(vetor1.length === vetor2.length) {
    
        for(let i = 0; i < vetor1.length; i++) {
            if(vetor1[i] !== vetor2[i]) {
                return false;
            }
        }

        return true;
    }

    return false;
}

console.log(equals([1,2,3,4], [1,2,3,4]));

/*
8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/
function removerAlinhamentos(vetor) {

    const vetorUnico = [];

    vetor.forEach((elemento) => {

        if(!Array.isArray(elemento)) {
            vetorUnico.push(elemento);
        } else {
            elemento.forEach((subElemento) => {
                vetorUnico.push(subElemento);
            });
        }
    });

    return vetorUnico;
}

console.log(removerAlinhamentos([1, 2, [3], [4, 5]]));

/*
9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/
function dividirVetor(vetor, quantidade) {

    const vetoresDivididos = [];

    while(true) {

        vetoresDivididos.push(vetor.splice(0, quantidade));

        if(vetor.length === 0) {
            break;
        }
    }

    return vetoresDivididos;
}

console.log(dividirVetor([1, 2, 3, 4, 5], 2));

/*
10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/
function valoresComuns(vetor1, vetor2) {
    
    const valores = [];
    let auxMaior = [];
    let auxMenor = [];

    // O Maior vetor que está percorrido no laço
    if(vetor1.length > vetor2.length) {
        auxMaior = [...vetor1];
        auxMenor = [...vetor2];
    } else {
        auxMaior = [...vetor2];
        auxMenor = [...vetor1];
    }

    auxMaior.forEach((elemento) => {
        if(auxMenor.indexOf(elemento) !== -1 && valores.indexOf(elemento) === -1) {
            valores.push(elemento);
        }
    });

    return valores;
}

console.log(valoresComuns([6, 8], [8, 9]));