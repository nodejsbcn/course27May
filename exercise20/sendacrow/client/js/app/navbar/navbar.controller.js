app.controller('NavbarController', ['$scope', '$state', '$translate', function($scope, $state, $translate){
	'use strict';

	if($state.is('home')) {
		$scope.showNavbar = false;
	}

	$scope.changeLanguage = function (key) {
		$translate.use(key);
	};
}]);
