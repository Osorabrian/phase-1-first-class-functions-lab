// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {return drivers.slice(0,2)}

const returnLastTwoDrivers = function (drivers) {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a){
    let b;
    return b => b * a
}

const fareMultiplier = createFareMultiplier();

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, printDrivers){
                return printDrivers(drivers)
}