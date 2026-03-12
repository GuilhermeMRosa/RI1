const capitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo de Vibranium",
    armaSecundaria: "Combate corpo a corpo",
    velocidade: 60,
    forca: 75,
    resistencia: 85,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark VII",
    armaSecundaria: "Repulsores",
    velocidade: 85,
    forca: 80,
    resistencia: 75,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Controle de raios",
    velocidade: 70,
    forca: 95,
    resistencia: 90,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Força bruta",
    armaSecundaria: "Ondas de choque",
    velocidade: 45,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const viuva = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Pistolas",
    armaSecundaria: "Pulsos de Viúva (eletrochoques)",
    velocidade: 75,
    forca: 50,
    resistencia: 55,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const gaviao = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e flecha",
    armaSecundaria: "Flechas explosivas",
    velocidade: 65,
    forca: 50,
    resistencia: 55,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const thanos = {
    nome: "Thanos",
    codinome: "O Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada de titânio duplo",
    velocidade: 60,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return (
            "Nome do personagem: " + this.nome + "\n" +
            "Codinome do Personagem: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundaria: " + this.armaSecundaria + "\n" +
            "Nivel de forca: " + this.forca + "\n" +
            "Nivel de velocidade: " + this.velocidade + "\n" +
            "Nivel de resistencia: " + this.resistencia
        );
    },
};

const personagens = [capitaoAmerica, homemDeFerro, thor, hulk, viuva, gaviao, thanos];

function batalha(p1, p2) {
    let pontuacao = 0;
    let pontuacao2 = 0;

    if (p1.forca > p2.forca) pontuacao += 1; else pontuacao2 += 1;
    if (p1.resistencia > p2.resistencia) pontuacao += 1; else pontuacao2 += 1;
    if (p1.velocidade > p2.velocidade) pontuacao += 1; else pontuacao2 += 1;

    console.log(p1.nome + " Vs " + p2.nome);
    if (pontuacao > pontuacao2) console.log(p1.nome + " vence!");
    else console.log(p2.nome + " vence!");
    console.log("---");
}

for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
        batalha(personagens[i], personagens[j]);
    }
}