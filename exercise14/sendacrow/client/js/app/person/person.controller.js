app.controller('PersonController', ['$scope', 'UserSessionProvider', 'personService', function($scope, UserSessionProvider, personService) {
	'use strict';

	$scope.personsList = function() {
		$scope.userData = UserSessionProvider.getUserData();
		personService.getPersons().then(function(result) {
			$scope.users = result; 	
		}, function (error) {
			$scope.error = error;
		});
	};

	$scope.getMessages = function(friendId) {
		UserSessionProvider.setFriendId(friendId);
	}

	$scope.personsList();

}]);