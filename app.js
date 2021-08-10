function getSleepHours(day){
    switch(day){
      case 'monday':
        return 6;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 4;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 10;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }
  
  function getActualSleepHours(){
    let sum = (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday'));
    return sum; 
  }
  
  function getIdealSleepHours(){
    let idealHours = 7;
    return idealHours * 7;
  }
  
  function calculateSleepDebt(){
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('User got perfect amount of sleep')
    }else if(actualSleepHours > idealSleepHours){
      console.log('The user got more hours than needed')
    }else{
      console.log('The user should get some rest');
    }
  }
  
  calculateSleepDebt();
  