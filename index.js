// Code your solution in this file!
const returnFirstTwoDrivers = arrayOfDrivers=> arrayOfDrivers.slice(0,2);// arrow functions have implicit return values.

const returnLastTwoDrivers = (arrayOfDrivers)=> arrayOfDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return (fare)=>integer*fare;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers,callbackfunction)=>{// passed by reference
   return callbackfunction(arrayOfDrivers); // called here
}