
const a = [];

const num1 = prompt('Enter 1st num')
const num2 = prompt('Enter 2st num')


const number1 = parseInt(num1)
const number2 = parseInt(num2)



a.push(number1)
a.push(number2)



var numberStep = 0;
//while loop to prompt user to enter number step 
while (numberStep === 0) {
    const numberStep = prompt('Enter the step (Cannot be zero): ')
    
    if (numberStep!=0){
        const number3 = parseInt(numberStep)
        a.push(number3);
        break;
    } else {
        alert("Error! Step cannot equal zero!")    
    }
}



//calling functions 
const result3 = multiplyStep(a)
const total = sum(result3)
const printArray = printA(a)
const binArray = dec2bin(result3)



//OUTPUT
result ='User input array is: ' + printArray + '<br>' +
        'The generated array is: ' + result3 + '<br>' +
        'The sum is: ' + total + '<br>' +
        'The Binary of absolute element values are: ' + binArray  

writeOutput(result)





function writeOutput(result) {
    const h3Element = document.getElementById('output')
    h3Element.innerHTML = result
}



//print array
function printA(a) {
    var print = '[ '
    for (var i = 0; i < a.length; i++)
    {
        print += a[i] + ' '    
    }
    print += ']'
    return print
}


//LOOP TO ADD ALL VALUES IN ARRAY
function sum(a) {    
    var total = 0;

    for (var i = 0; i < a.length; i++)
    {
        total += a[i]
        
    }
    return total     
}


//multiply start by step - to reach end
function multiplyStep(a) {
    let b = []
    var start = a[0]
    var end = a[1]
    var step = a[2]
    
    
    for (var i = start; i < end; i = i + step )
    {
        const x = parseInt(i)
        b.push(x)
    }
    b.push(end)
    
    
    
    return b    
}

function dec2bin(a){
    // the >>> rightshift to 0 remove the sign
    // thus it can handle negative number 
    let c = []
    for (var i = 0; i < a.length; i++)
    {   
        var z = a[i]
        x = (z >>> 0).toString(2)
        c.push(x)

    }    

    return c
}
