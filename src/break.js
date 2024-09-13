const numbers = [];
let NbValInf = 0;
    for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > 50)
    {
        console.log(numbers[i]);
        NbValInf += (numbers.length - i - 1);
        console.log("Nombre de valeurs en dessous de 50 : " + NbValInf);
        break; //contrôle de flux
    }

}