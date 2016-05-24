app.controller('MessageController', ['$scope', 'messageService', 'UserSessionProvider', function($scope, messageService, UserSessionProvider) {
	'use strict';

	$scope.messageSaved = false;
	
	$scope.listMessages = function() {
		var friendData = {
			id: UserSessionProvider.getFriendId()
		} 
		messageService.getMessagesFromUser(friendData).then(function (result) {
            $scope.messages = result;
        }, function (error) {
            $scope.error = error;
        });
	};

	$scope.saveMessage = function() {
		var userData = UserSessionProvider.getUserData();
		var messageBody = {
			"text": $scope.messageText,
			"ownerId": userData.id,
			"id": userData.id 
		}
		messageService.setMessage(messageBody).then(function() {
			$scope.successMessage = 'Saved correctly';
			$scope.messageSaved = true;
			$scope.listMessages();
			$scope.messageText = '';
		}, function (error) {
			$scope.alertMessage = 'Error on save';
			$scope.messageError = true;
		})
	}

	$scope.listMessages();
}]);
