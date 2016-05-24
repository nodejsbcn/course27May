(function(){
	'use strict';

	var vendor = angular.module('vendor', []);

	function UserSessionProvider() {
		function SessionManager () {
			var _userData;

			this.setUserData = function(userData) {
				_userData = userData;
			};

			this.getUserData = function() {
				return _userData;
			};
		}
		var sessionManager = new SessionManager();

	    this.$get = function () {
	      return sessionManager;
	    };
	}

	vendor.provider('UserSessionProvider', UserSessionProvider);
})();