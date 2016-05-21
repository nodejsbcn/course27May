app.service('personService', [ '$http', '$q', 'Person', function($http, $q, Person) {
	'use strict';

	function getPersons() {
		var deferred = $q.defer();
		Person.find()
			.$promise
			.then(function(results) {
				deferred.resolve(results);
			});
		return deferred.promise;
	}

	function getPerson(person) {
		var deferred = $q.defer();
		Person.findById(person)
			.$promise
			.then(function(results) {
				console.info(results);
				deferred.resolve(results);
			});
		return deferred.promise;	
	}

	function setPerson(person) {
		var deferred = $q.defer();
		Person.create(person)
			.$promise
			.then(function(result) {
				deferred.resolve(result);
			});

		return deferred.promise;
	}

	this.getPersons = function() {
		return getPersons();
	};

	this.getPerson = function(person) {
		return getPerson(person);
	};

	this.setPerson = function(person) {
		return setPerson(person);
	};
}]);