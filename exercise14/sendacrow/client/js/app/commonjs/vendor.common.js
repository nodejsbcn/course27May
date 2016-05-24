(function(){
	'use strict';

	var vendor = angular.module('vendor', []);

	function UserSessionProvider() {
		function SessionManager () {
			var _userData, _friendId;

			this.setUserData = function(userData) {
				_userData = userData;
			};

			this.getUserData = function() {
				return _userData;
			};
			this.setFriendId = function(friendId) {
				_friendId = friendId;
			};

			this.getFriendId = function() {
				return _friendId;
			};
		}
		var sessionManager = new SessionManager();

	    this.$get = function () {
	      return sessionManager;
	    };
	}

	vendor.provider('UserSessionProvider', UserSessionProvider);
})();