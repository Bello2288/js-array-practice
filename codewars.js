// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const number = function(array) {
    let output = []
    for(let i = 0; i < array.length; i++) {   
      output.push((i + 1) +  ": " + array[i])   
    }
      return output
  }

// 9/16 could have also used .map
// const number = function(array) {
//   if(array.length === 0) {

//   }......

//     return array.map(function(item, index) {
//       return `$(index + 1): $(item)`;
//     });


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript


function arr(num) {
  if(num === undefined) {
    return [];
  }
  const result = [];
  for(let i = 0; i < num; i++) {
    result.push(i);
  }
    return result;
}
// ==================================
// 9/16
function arr(num) {
  return num === undefined ? [] : [...Array(num).keys()];
}






// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

const flyBy = (lamps, drone) => {
    let dronePath = drone.split("=").length;
    let lights = lamps.substring(0, dronePath).replace(/x/g, "o");
  
    return lights + lamps.substring(lights.length, lamps.length);
  }

// 9/16

// function flyBy(lamps, drone) {
//   if(drone.length > lamps.length) return "o".repeat(lamps.length);
//   return "o".repeat(drone.length) + "x".repeat(lamps.length - drone.length);
// }


  
// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }




// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

// ***** It was not giving me access to this code wars