app.controller('RegisterController', ['$scope', 'registerService', 'UserSessionProvider', function($scope, registerService, UserSessionProvider) {
	'use strict';
	$scope.userCreated = false;
	$scope.errorCreation = false;

	$scope.checkUserData = function() {
		var registerOk = true;
		if (!$scope.userName || !$scope.userEmail || !$scope.userNickname) {
			registerOk = false;
		}
		if (registerOk) {
			var userData = {
				name: $scope.userName,
				email: $scope.userEmail,
				nickname: $scope.userNickname
			};
			$scope.errorCreation = false;
			registerUser(userData);
		} else {
			$scope.errorMessage = 'Fill all the fields';
			$scope.errorCreation = true;
		}
	}

	var registerUser = function(userData) {
		registerService.saveUser(userData).then(function(resultUserData) {
			$scope.successMessage = 'User created correctly';
			$scope.userCreated = true;	
			UserSessionProvider.setUserData(resultUserData);
		}, function (err) {
			$scope.errorMessage = 'Error on create user';
		});
	}
}]);