app.controller('MessageController', ['$scope', 'messageService', function($scope, messageService) {
	'use strict';

	$scope.messageSaved = false;
	
	$scope.listMessages = function() {
		messageService.getMessages().then(function (result) {
            $scope.messages = result;
        }, function (error) {
            $scope.error = error;
        });
	};

	$scope.saveMessage = function() {
		var messageBody = {
			"text": $scope.messageText
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
