//wrap in anonymous function to isolate namespace
(function(){

//variable for displaying via inline html expressions, and to exhibit ng-show
    var testvar = {str : 'test', bool : 'false' };

//variable to demonstrate iterating through array. 
//needs to be added to controller
    var toys = [
        { name: 'Woody', age: 2 },
        { name: 'Buzz', age: 3 },
        { name: 'Zurg', age: 50 }
    ];
//Create initial angular module, args are name, dependency array.
    var app = angular.module("myMod", []);

//create controller from module, must register it to html
//args are name, callback
    app.controller("MyController", function(){
        //bind variables in this script to properties of this controller
        //properties can be created on the fly
        this.attr = testvar;

        //to demonstrate iteration
        this.toys = toys;
    });



})();