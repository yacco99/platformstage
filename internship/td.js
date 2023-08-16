const poids=5;
const taille=3;

function calcul(poids,taille)
{
 return poids/(taille*taille)
}

const imc= calcul(poids,taille);
console.log (imc)
