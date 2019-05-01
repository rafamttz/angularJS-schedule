angular.module("listaTelefonica").directive("uiAlert", function() {
    return {
        templateUrl: 'uiAlert.html',
        restrict: 'AE',
        scope: {
            titulo: "@titulo",  //@ for DOM data
            message:"=message"  //= for controller data
        },
        transclude: true    // transclude enable insert elements in DOM's directive
    };
});