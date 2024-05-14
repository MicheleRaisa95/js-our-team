'use strict'

// MILESTONE 0 creo arrey di oggetti

const teamMembers = [
    {
        nome: "Wayne Barnett",

        ruolo: "Founder & Ceo",

        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",

        ruolo: "Chief Editor",

        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",

        ruolo: "Office Manager",

        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",

        ruolo: "Social Media Manager",

        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",

        ruolo: "Developer",

        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",

        ruolo: "Graphic Designer",

        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

// MILESTONE 1: stampo le informazioni in console

// for...in + console log

for (let info in teamMembers) {
    const member = teamMembers[info]
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
}

// MILESTONE 2 STAMPO LE INFORMAZIONI NEL DOM

const  listElement = document.querySelector(".lista");

for (let info = 0; info < teamMembers.length; info++) {
const member = teamMembers[info];
const memberInfo = `Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`;
const listItem = document.createElement("li");
listItem.innerText = memberInfo;
listElement.append(listItem);
}

