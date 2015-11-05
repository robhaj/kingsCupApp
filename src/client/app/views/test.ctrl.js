(function() {
    'use strict';

    angular.module('app')
        .controller('TestCtrl', TestCtrl);

    TestCtrl.$inject = ['$uibModal'];

    function TestCtrl($uibModal) {
        var test = this;

        test.openModal = function() {
            var modal = $uibModal.open({
                templateUrl: 'app/views/test.modal.html',
                controller: TestModalCtrl,
                controllerAs: 'vm'
            });
        };

        function TestModalCtrl() {
            var vm = this;
            vm.numPlayers = 2;

            vm.range = function(num) {
                return new Array(num);
            };
        }
    }
})();
