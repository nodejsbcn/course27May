app.service('messageService', [ '$http', '$q', 'Message', function($http, $q, Message) {
	'use strict';


	function getMessages() {
		var deferred = $q.defer();
		Message.find()
			.$promise
			.then(function(results) {
				deferred.resolve(results);
			});

		return deferred.promise;
	}

	function setMessage(message) {
		var deferred = $q.defer();
		Message.create(message)
			.$promise
			.then(function(result) {
				deferred.resolve(result);
			});

		return deferred.promise;
	}

	this.getMessages = function() {
		return getMessages();
	};

	this.setMessage = function(message) {
		return setMessage(message);
	};
}]);