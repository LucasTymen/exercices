/*

// return
function monitorCount(rows, columns) {
  count = rows * columns;
  return count;
}
const numOfMonitors = monitorCount(5, 4);
console.log(monitorCount(5, 4));
console.log(numOfMonitors);

// helper functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
return monitorCount(rows, columns) * 200;
};

const totalCost = costOfMonitors(5,4)

console.log(totalCost )

// function expressions
const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
      } else {
      return false;
    }
};

console.log(plantNeedsWater('Tuesday'))

// arrow functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// refacto to ternary

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

*/
