/*
Read student marks, If a mark is 48 or above but less than 50, 
apply grace and make it 50, Display passed subjects (≥ 50)
*/
function getGraceMarks(marks){
    let updatedMarks = [];
    for (let index = 0; index < marks.length; index++) {
        const mark = marks[index];
        if (mark >=48 && mark < 50){
            updatedMarks.push(50);
        }else{
            updatedMarks.push(mark);
        }    
    }
    return updatedMarks;
}
function getPassMarks(marks){
    let passMarks = [];
    for (let index = 0; index < marks.length; index++) {
        const mark = marks[index];
        if (mark >= 50){
            passMarks.push(mark);
        }       
    }
    return passMarks;
}

let marks = [48, 75, 62, 49, 45];
console.log("Original Mark: "+marks);

let updatedMarks = marks.map(m => (m >=48 && m < 50)? 50 : m);
console.log("Updated Marks: "+updatedMarks);

let passMarks = updatedMarks.filter(e => e >= 50)
console.log("Pass Marks: "+passMarks);

/*
    Write a JS to multiply the even numbers by 5 from the given array
*/

function evenNumber(values){
    let result = [];
    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        if(element % 2 == 0){
            result.push(element * 5)
        }        
    }
    return result;
}

let numbers = [1,2,3,4,5,6,7];
let result = numbers.filter(e => e % 2 == 0).map(e => e * 5);
console.log(result);