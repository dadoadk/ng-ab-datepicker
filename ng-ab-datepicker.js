"use strict";
angular.module('ngAbDatepicker',[]).directive('abDatePicker', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            ngModel: '=',
            outputFormat: '@'
        },
        compile: function (element, attributes) {

            return {
                post: function (scope, element, attributes, controller, transcludeFn) {
                    $timeout(function () {
                        
                        var mainElement = angular.element(element);

                        mainElement.datepicker({
                            outputFormat: scope.outputFormat,
                            theme: 'default',
                            gainFocusOnConstruction: false,
                            modal: false,
                            closeButtonTitle: "Cancel"
                        }); 
                        
                        //set the date on load
                        if (angular.isDefined(scope.ngModel))
                        { 
                            if(angular.isString(scope.ngModel)){
                                if (scope.ngModel.length != 0) {
                                    var dateObject = new Date(scope.ngModel);

                                    if (dateObject != "Invalid Date")
                                        mainElement.datepicker('setDate', dateObject);
                                }
                            }                                    
                            else
                                mainElement.datepicker('setDate', scope.ngModel);
                        }



                    }, 0, false);
                }
            }
        }
    }
}]);