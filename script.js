// Scrivo un programma che stampi numeri da 1 a 100

for(let i=1; i<=100 ; i++){
    //Se il numero è un multiplo di 3 e 5 scrivo FizzBuzz
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    //Se il numero è un multiplo di 5 scrivo Buzz
    } else if (i % 5 == 0){
        console.log("Buzz")
    //Se il numero è un multiplo di entrambi scrivo FizzBuzz
    } else if (i % 3 == 0 ){
        console.log("Fizz")
    } else {
        console.log(i)
    }
}