app.controller('PersonController', ['$scope', 'personService', function($scope, personService) {
	'use strict';

	$scope.personsList = function() {
		personService.getPersons().then(function(result) {
			$scope.users = result; 	
		}, function (error) {
			$scope.error = error;
		});
	};

	$scope.getPerson = function(personId) {
		var person = {
			id: personId
		}
		personService.getPerson(person).then(function(result) {
			$scope.person =  result;	
		}, function(error) {
			$scope.error = error;
		});
	}

	$scope.personsList();

	$scope.savePerson = function() {
		var personBody = {
			"name": $scope.personName,
			"nickname": $scope.personNick,
			"email": $scope.personEmail
		}
		personService.setPerson(personBody).then(function() {
			$scope.successMessage = 'Saved correctly';
			$scope.personSaved = true;
			$scope.personsList();
			$scope.personName = '';
			$scope.personNick = '';
			$scope.PersonEmail = '';
		}, function (error) {
			$scope.alertMessage = 'Error on save';
			$scope.messageError = true;
		})
	}
}]);