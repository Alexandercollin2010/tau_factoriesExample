var myApp = angular.module( 'myApp', [] );

myApp.factory( 'garageFactory', function(){
  // create an object (this name will only be used in here)
  var myFactory = {};
  //create the things we want to be part of the factory
  // initial arrays
  myFactory.cars = [];
  myFactory.bikes = [];

  // functions
  myFactory.addBike = function( newBike ){
    this.bikes.push( newBike );
    return this.bikes;
  }; // end incrementCars

  myFactory.addCar = function( newCar ){
    this.cars.push( newCar );
    return this.cars;
  }; // end incrementCars
  // return the factory
  return myFactory
}); // end garageFactory

myApp.controller( 'BikeController', [ '$scope', 'garageFactory', function( $scope, garageFactory ){
  console.log( 'bike controller' );
  $scope.addBike = function(){
    console.log( 'in addBike' );
    var newBike = {
      year: $scope.yearIn,
      make: $scope.makeIn,
      model: $scope.modelIn,
      picUrl: $scope.picUrlIn
    }; //end newBike
    garageFactory.bikes.push( newBike );
    console.log( 'garageFactory.bikes:', garageFactory.bikes );
  }; // end addBike
}]); // end BikeController

myApp.controller( 'CarController', [ '$scope', 'garageFactory', function( $scope, garageFactory ){
  console.log( 'car controller' );
  $scope.addCar = function(){
    var newCar = {
      year: $scope.yearIn,
      make: $scope.makeIn,
      model: $scope.modelIn,
      picUrl: $scope.picUrlIn
    }; //end newCar
    garageFactory.cars.push( newCar );
    console.log( 'garageFactory.cars:', garageFactory.cars );
  }; // end addCar
}]); // end CarController

myApp.controller( 'GarageController', [ '$scope', 'garageFactory', function( $scope, garageFactory ){
  console.log( 'garage controller' );
  $scope.bikes = garageFactory.bikes;
  $scope.cars = garageFactory.cars;
}]); // end garageController
