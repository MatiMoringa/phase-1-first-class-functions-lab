const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0, 2)
};


const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(driversArray.length - 2);
}


const selectingDrivers = (() => [
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
])();


const createFareMultiplier = (fare) => () => fare * fare;


const fareDoubler = function (fare) {
  return fare * 2;
}


const fareTripler = function (fare) {
  return fare * 3;
}


const selectDifferentDrivers = function (driversArray, firstOrLastDriversFunction) {
  return firstOrLastDriversFunction(driversArray);
}