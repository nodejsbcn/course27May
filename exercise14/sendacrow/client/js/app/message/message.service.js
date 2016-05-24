app.service('messageService', [ '$http', '$q', 'Person', 'Message', function($http, $q, Person, Message) {
	'use strict';


	function getMessagesFromUser(friendData) {
		var deferred = $q.defer();
		Person.messages(friendData)
			.$promise
			.then(function(results) {
				deferred.resolve(results);
			});

		return deferred.promise;
	}

	function setMessage(message) {
		var deferred = $q.defer();
		Person.messages.create(message)
		.$promise
		.then(function(result) {
			deferred.resolve(result);
		});

		return deferred.promise;
	}

	this.getMessagesFromUser = function(friendData) {
		return getMessagesFromUser(friendData);
	};

	this.setMessage = function(message) {
		return setMessage(message);
	};
}]);