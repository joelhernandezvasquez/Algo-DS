// 1678. Goal Parser Interpretation
// Easy

// 495

// 50

// Add to List

// Share
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

var interpret = function(command) {
    
    let goalParser = "";
    
    
    for(let i=0 ;i<command.split('').length;i++)
        {
         
            if(command[i] === 'G'){
                goalParser+=command[i]
            }
            else if( command[i] ==='(' && command[i+1] === ')'){
                goalParser +='o'
            }
            else if( command[i] ==='(' && command[i+1] === 'a' && command[i+2] ==='l' && command[i+3] === ')')
                {
                    goalParser+='al'
        }
            
        }
   return goalParser;
};