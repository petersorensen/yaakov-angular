(function () {
	'use strict';

	angular.module('LunchCalculator',[])

	.controller('LunchCalculatorController', DIController);

	DIController.$inject = ['$scope','$filter'];
	function DIController($scope,$filter) {
		$scope.lunchitems = "";
		$scope.lunchMessage = "No Message";
		$scope.button1 = "testbutton";

		$scope.checkLunch = function(){

			var itemsCount = calculateItemsInString($scope.lunchitems);

			if (itemsCount <= 0) {
				$scope.lunchMessage = "Please enter data first";
			} else if (itemsCount <= 3) {
				$scope.lunchMessage = "Enjoy!";
			}
			else {
				$scope.lunchMessage = "Too much!";
			}
		};

		function calculateItemsInString(string) {
			var items = $scope.lunchitems.split(",").filter(notEmpty);
			return items.length;
		}

		function notEmpty(item) {
    		return item != "";
		}

	};
})();