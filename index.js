// code your solution here
function saturdayFun(activity){
    if (activity == undefined){
        return 'This Saturday, I want to roller-skate!'
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}

function mondayWork(schedule){
    if (schedule == undefined){
        return 'This Monday, I will go to the office.'
    } else {
        return `This Monday, I will ${schedule}.`
    }
}

function wrapAdjective(highlightChar) {
    return function(adjective) {
      if (highlightChar == '*'){
        return `You are ${highlightChar}${adjective}${highlightChar}!`;
      } else if (highlightChar == '||'){
          return `You are ${highlightChar}${adjective}${highlightChar}!`;
      } else {
          return 'You are special.';
      }
    };
  }
