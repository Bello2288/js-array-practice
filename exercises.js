// ---------------------
// Define a function that takes a string and an integer of i and creates a 
// new array of length i where each value is equal to the string passed in

// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


function array(str, i) {
    const result = [];
    for(let j = 0; j < i; j++){
        result.push(str);
    }
    return result
}


// -----------------------------------------------



// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------


    function array(arr) {
        const reversed = arr.slice().reverse(); // return takes the new variable "reversed" and will give take the
                                                // inputed "arr", will use method ".slice" to make a shallow copy of the
                                                // "arr" but keep origianl, and then is reversed with method .reverse.
        return reversed
    }

// -----------------------------------------------




// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function array(arr) { 
    return arr.filter(Boolean) // return takes the "arr" and uses the filter 
                               // method ".filter" and returns the truthy values using "(Boolean)"
}

// -----------------------------------------------




// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

function answer1(arr) {
    const result = {};                      // first, makes an empty object 
    for(let i = 0; i < arr.length; i++){    // use for loop to pass through each value in nested array (arr.length)
        result[arr[i][0]] = arr[i][1];      // result brings in [name, "charlie"......]
    }
    return result
}

// -----------------------------------------------




// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

function array(arr) {
    let newArray = [new Set(arr)]; // <--- here we define a new varialbe and create a new Set. We then pass in the 
                                    // original array and a value of "Set" will occur only once.
    return newArray
}

// -----------------------------------------------





// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

function areEqual(arr1, arr2) {
    let N = arr1.length;    // make two variables for each array to check the length
    let M = arr2.length;    
        if (N != M)         // a quick test to return false for not equal length arrays
        return false;
    arr1.sort();                // now we can take each array and use the ".sort" method to arrange in array in an order.
    arr2.sort();                
        for (let i = 0; i < N; i++)    // then we can use a for loop to test each array against each other.
        if (arr1[i] != arr2[i])         // if the vaules are not the same 
        return false;                   // we will return false
        return true;                    // if they are equal we will return turn.
    }
    

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------


function array(arr1, arr2) {
    return arr1.concat(arr2) //used .concat to merge arrays together 
}

// -----------------------------------------------




// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------

function array(arr, size) {   // we are taking an inputed array "arr", and then inputed the "size" of the array we want
    const result = [];        // need to make a variable to set an empty array

    for(let i = 0; i < arr.length; i += size) {   // using for loop to iterate over the array length 
        const portion = arr.slice(i, i + size);   // set a new variable which will take the array, make a shallow copy and set to the new array
        portion.push(size);                       // use the .push method will add the shallow copy to the end
    }
    return result
}

// -----------------------------------------------