c// Here is a 2d array of student scores, student names might be
// repeated multiple times. If this is the case, sum up all the scores and
//  divide by the number of occurrences to find the average,
// do the Math.floor if necessary.

// var arr =
// var arr = [
//   ["Bobby","87"],
//   ["Charles","100"],
//   ["Eric","65"],
//   ["Charles","22"],
//   ["Charles","37"],
//   ["Eric","49"]]

function findHighestAverage(arrScores) {
    const studentScores = {};
    let heighestAverage = 0;
  
    for (let i = 0; i < arrScores.length; i++) {
      let students = arrScores[i];
  
      if (!studentScores[students[0]]) {
        studentScores[students[0]] = [];
      }
  
      studentScores[students[0]].push(students[1]);
    }
  
    for (const values of Object.values(studentScores)) {
        
        let average = getTotalScores(values) / values.length
       
        if(average > heighestAverage){
          heighestAverage = average;
        }
       
    }
    return heighestAverage;
  }
  
  const getTotalScores = (scores) =>{
    const totalScores =  scores.reduce((sum,num)=>{
      return Math.floor(sum + parseInt(num));
   },0)
   return totalScores;
  }
  
  const fn = findHighestAverage([
    ["Bobby", "87"],
    ["Charles", "100"],
    ["Eric", "65"],
    ["Charles", "22"],
    ["Charles", "37"],
    ["Eric", "49"]
  ]);
  console.log(fn);
  