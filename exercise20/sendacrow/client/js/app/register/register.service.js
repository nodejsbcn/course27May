app.service('registerService', [ '$http', '$q', 'Person', function($http, $q, Person) {
	'use strict';

	function saveUser(userData) {
		var deferred = $q.defer();
		Person.create(userData)
			.$promise
			.then(function(result) {
				deferred.resolve(result);
			});

		return deferred.promise;
	}

	this.saveUser = function(userData) {
		return saveUser(userData);
	};
}]);