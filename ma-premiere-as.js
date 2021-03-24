let somme = 0;

process.argv.forEach((val, index) => {
  if (index !== 0 && index !== 1) {
    somme += Number(val)
  }
  //console.log(`${index}: ${val}`);
});
console.log(somme)


// Alternative 
/*
let somme = 0;

for (let i = 2; i < process.argv.length; i++) {
  somme += Number(process.argv[i]);
}
console.log(somme);
*/








