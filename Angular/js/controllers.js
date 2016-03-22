
var controllers = angular.module("mySimpleApp");

controllers.controller("controller1", ["$scope", "$location", function($scope, $location) {
    $scope.alert = function() {
        alert("HELLO!");
    }
    
    $scope.next = function() {
        $location.path("/obj2");
    }
    
}]);

controllers.controller("controller2", ["$scope", "$location", function($scope, $location) {
    $scope.input = function(message) {
        alert(message);
    }
    
    $scope.next = function() {
        $location.path("/obj3");
    }
    
}]);

controllers.controller("controller3", ["$scope", "$location", function($scope, $location) {
    $scope.next = function() {
        $location.path("/obj4");
    }
    
}]);

controllers.controller("controller4", ["$scope", "$location", function($scope, $location) {
    $scope.changeColor = function() {
        for (var i = 0; i < 3; i++) {
        
            $scope.n1 = Math.floor(Math.random() * 3);
            $scope.num1 = $scope.n1.toString();
            $scope.n2 = Math.floor(Math.random() * 6);
            $scope.num2 = $scope.n2.toString();
            $scope.n3 = Math.floor(Math.random() * 6);
            $scope.num3 = $scope.n3.toString();
            
            if (i == 0) {
                if ($scope.num1 == 0) {
                    $scope.red = $scope.num2 + $scope.num3;
                } else {
                    $scope.red = $scope.num1 + $scope.num2 + $scope.num3;
                }
            }

            if (i == 1) {
                if ($scope.num1 == 0) {
                    $scope.green = $scope.num2 + $scope.num3;
                } else {
                    $scope.green = $scope.num1 + $scope.num2 + $scope.num3;
                }
            }

            if (i == 2) {
                if ($scope.num1 == 0) {
                    $scope.blue = $scope.num2 + $scope.num3;
                } else {
                   $scope.blue = $scope.num1 + $scope.num2 + $scope.num3;
                }
            }
        }
        $scope.newColor = "rgb(" + $scope.red + "," + $scope.green + "," + $scope.blue + ")";
    }
    
    $scope.next = function() {
        $location.path("/obj5");
    }
    
}]);

controllers.controller("controller5", ["$scope", "$location", function($scope, $location) {
    $scope.name = function() {
        $scope.fullName = "Will Kirkpatrick";
    }
    
    $scope.next = function() {
        $location.path("/obj6");
    }
    
}]);

controllers.controller("controller6", ["$scope", "$location", function($scope, $location) {
    
    $scope.listFriends = function() {
        $scope.friends = ["Jesus", "your Mom", "Bob at the liquor store", "Santa Clause", "John", "Paul", "George", "Ringo", "Charles Sammy", "Leon"];
    }
    
    $scope.next = function() {
        $location.path("/");
    }
    
}]);