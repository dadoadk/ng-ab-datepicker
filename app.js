
angular.module('myTestApp', [
    'ngAbDatepicker'
])
.controller("myController", function($scope){
    $scope.filter = {
        fromDate: null
    }
});