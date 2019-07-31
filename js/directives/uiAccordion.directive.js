(function() {
    'use strict';

    angular
        .module('listaTelefonica')
        .directive('uiAccordions', uiAccordions)
        .directive('uiAccordion', uiAccordion);

    uiAccordions.$inject = [];
    function uiAccordions() {

        var directive = {
            controller: uiAccordionsController,
        };
        return directive;
        
    }
    /* @ngInject */
    function uiAccordionsController () {
        var vm = this;

        var accordions = [];

        vm.registerAccordion = function(accordion) {
            accordions.push(accordion);
        }

        vm.closeAll = function() {
            accordions.forEach(accordion => {
                accordion.isOpened = false;
            });
        }

    }

    ///////////////

    uiAccordion.$inject = [];
    function uiAccordion() {

        var directive = {
            templateUrl: "../views/accordion.html",
            transclude: true,
            scope: {
                title: "@"
            },
            require: '^uiAccordions',
            link: link
        };
        return directive;
        
        function link(scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
			scope.open = function () {
                ctrl.closeAll();
				scope.isOpened = true;
			};
        }
    }
})();
