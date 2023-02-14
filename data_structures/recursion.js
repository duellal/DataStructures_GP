/**
 * Properties of Recursion: 
 *      Performing the same operations multiple times with 
 *          different inputs.
 *      In every step, we try smaller inputs to make the 
 *          problem smaller.
 *      Base condition is needed to stop the recursion 
 *          otherwise infinite loop will occur.
 */

// function to find factorial of given number using 
//recursion
const factorial = n => { 
    if(n === 0 || n ===1){
        return 1
    }

    return n * factorial(n-1)
}

module.exports = {
    factorial
}