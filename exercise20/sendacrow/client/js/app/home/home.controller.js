app.controller('HomeController', ['$scope', '$state', '$document', function($scope, $state, $document){
	'use strict';

	if($state.is('home')) {
		$scope.showNavbar = false;
	}

	$scope.toTheTop = function() {
		$document.scrollTopAnimated(0, 5000).then(function() {
			console.log('You just scrolled to the top!');
		});
	};
	
	var section3 = angular.element(document.getElementById('section-3'));
	
	$scope.toSection3 = function() {
		$document.scrollToElementAnimated(section3);
	};
}]);
