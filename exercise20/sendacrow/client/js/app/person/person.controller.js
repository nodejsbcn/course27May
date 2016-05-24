app.controller('PersonController', ['$scope', 'lodash', 'UserSessionProvider', 'personService', function($scope, lodash, UserSessionProvider, personService) {
	'use strict';

	$scope.personsList = function() {
		$scope.userData = UserSessionProvider.getUserData();
		personService.getPersons().then(function(result) {
			$scope.users = result; 	
		}, function (error) {
			$scope.error = error;
		});
	};

	$scope.addFriend = function(friendId) {
		$scope.userData = UserSessionProvider.getUserData();
	}

	$scope.personsList();

}]);