var a=12;
var b=4;
function pgcd(a,b){

   while (a!=b)
  { if (a>b) a-=b; else b-=a}
  return b
}

console.log(pgcd(a,b));