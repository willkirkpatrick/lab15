var app = angular.module("mySimpleApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
       templateUrl: "views/objective1.html",
       controller: "controller1" 
    })
    .when("/obj2", {
       templateUrl: "views/objective2.html",
       controller: "controller2" 
    })
     .when("/obj3", {
       templateUrl: "views/objective3.html",
       controller: "controller3" 
    })
     .when("/obj4", {
       templateUrl: "views/objective4.html",
       controller: "controller4" 
    })
     .when("/obj5", {
       templateUrl: "views/objective5.html",
       controller: "controller5" 
    })
     .when("/obj6", {
       templateUrl: "views/objective6.html",
       controller: "controller6" 
    })
}]);
