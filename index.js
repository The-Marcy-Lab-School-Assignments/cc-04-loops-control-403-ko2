//Write your solutions in this file, don't forget to test your functions.

const countFromOne = (int) =>{
    for(i = 1; i <= int; i++)
        console.log(i)
}
countFromOne(9);
console.log('\n')

const countEveryOdd = (int) =>{
    let i = 1
    while(i <= int){
        console.log(i)
        i += 2
    }
}
countEveryOdd(9)
console.log('\n')

const isNegative = (num) =>{
    if(num > 0){
        console.log(true)
    }else{
        console.log(false)
    }
}
isNegative(-3)
console.log('\n')

const betweenFiveAndTwenty =(int) =>{
    if(int > 5 && int < 20){
        console.log(true)
    }else{
        console.log(false)
    }
}
betweenFiveAndTwenty(13)
console.log('\n')

const sumOfThreeOrFive = () =>{
    let total = 0;
    for(i = 1; i < 1000; i++){
        if(i % 3 === 0 || i % 5 === 0){
            total += i
        }
    }
    console.log(total)
}
sumOfThreeOrFive()
console.log('\n')

const isAllLowerCase = (str) =>{
    if (str === str.toLowerCase()){
        console.log(true)
    }else {
        console.log(false)
    }
}
isAllLowerCase('yes it is')
console.log('\n')

const countMultiplesOfFive = (arr) =>{
    let count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 5 === 0){
            count++
        }
    }
    console.log(count)
}
countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10])
