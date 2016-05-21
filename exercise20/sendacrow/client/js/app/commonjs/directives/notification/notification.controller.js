app.directive('modalDialog', ["ModalService", "$rootScope", function(ModalService,$rootScope) {
    return {
        restrict: 'AE',
        scope: {
            show: '=',
            onClose: '&?'
        },
        replace: true,
        transclude: true,
        link: function(scope, element, attrs) {
            var setupStyle = function() {
                scope.dialogStyle = {};
                if (attrs.width) {
                    scope.dialogStyle['width'] = attrs.width;
                }
                if (attrs.height) {
                    return scope.dialogStyle['height'] = attrs.height;
                }
            };

            scope.hideModal = function() {
                $rootScope.$broadcast("hideModalDialog");
                return scope.show = scope.show;
            };

            scope.$watch('show', function(newVal, oldVal) {
                if (newVal && !oldVal) {
                    ModalService.setOpening(true);
                    document.getElementsByTagName("body")[0].style.overflow = "hidden";
                } else {
                    ModalService.setOpening(false);
                    document.getElementsByTagName("body")[0].style.overflow = "";
                }
                if ((!newVal && oldVal) && (scope.onClose != null)) {
                    return scope.onClose();
                }
            });

            return setupStyle();
        },
        templateUrl: "app/general/notification/modal.html"
    };
}]);

app.controller('Notification2Controller', ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
        if(!$rootScope.$$phase){
            $scope.$apply();
        }
    };
    $scope.setShowValue = function(value) {
        $scope.modalShown = value;
        if(!$rootScope.$$phase){
            $scope.$apply();
        }
        if(value && $scope.reason==='saveChanges'){
            $scope.$parent.$parent.goingBack = true;
        }
    };
    $scope.$on('notification', function(event, reason) {
        if (reason) {
            $scope.reason = reason;
        } else {
            $scope.reason = 'saveChanges';
        }
        $scope.toggleModal();
    });
    $scope.$on('notificationValue', function(event,reason,value){
        if (reason) {
            $scope.reason = reason;
        } else {
            $scope.reason = 'saveChanges';
        }
        $scope.setShowValue(value);
    })
}]);