const tbody = document.getElementsByTagName('tbody')[0];

const buttonClean = document.getElementsById('cleanKeys');
buttonClean.addEventListener('click',()=>cleanKeys());


function generateKeys(){

    const key= {
        numbers: generateNumbers(1,50,5),
        stars: generateStars(1,10,2),
        sortFun:(a,b)=>a-b
    }

    tbody.innerHTML = tbody.innerHTML + '<tr>'+
    '<td>' + key.numbers.join(',') + " => " + key.stars.join(',') + '</td>'+
    '<td>'+ key.numbers.sort(key.sortFun).join(',') + '</td>'+
    '<td>'+ key.stars.sort(key.sortFun).join(',') + '</td>'+
    '</tr>' 
}

function generateNumbers(min, max, length){
    let numbers = [];
    while(numbers.length < length){
        let number = Math.floor(Math.random()* (max - min + 1)) + min;
        numbers.push(number);
    }
    return numbers
}

function generateStars(min, max, length){
    let stars = [];
    while(stars.length < length){
        let star = Math.floor(Math.random()* (max - min + 1)) + min;
        stars.push(star);
    }
    return stars
}
function cleanKeys(){
    tbody.innerHTML = '';
}