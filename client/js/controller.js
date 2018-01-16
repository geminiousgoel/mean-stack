angular.module('myApp')
.controller('MyController',MyController)
.controller('MainController',MainController)
.controller('AboutController',AboutController);

function MyController(){
    var vm = this;
    vm.name = "Mohit";  
    console.log(vm.name);
}

function MainController(){
    var vm = this;
    vm.name = "MainController";

}

function AboutController(){
    var vm = this;
    vm.name = "AboutController";

}