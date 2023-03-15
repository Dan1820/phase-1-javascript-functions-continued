// code your solution here


function saturdayFun(activity='roller-skate'){
    
    
    

        // return `This Saturday, I want to ${activity}! `
        return `This Saturday, I want to ${activity}!`
        // console.log(`This Saturday, I want to ${activity} `)
  
}
// console.log(saturdayFun('Drink'));
console.log(saturdayFun());

function mondayWork(workDone='go to the office'){
    // return `This Monday, ${workDone}.`
    return `This Monday, I will ${workDone}.`

}
// console.log(mondayWork())
// console.log(mondayWork(`This Monday, I will work from home`))

function wrapAdjective(adj='*'){
    // let result = wrapAdjective('*')
      return function(action='a hard worker'){

      
      return `You are ${adj}${action}${adj}!`
      }

}