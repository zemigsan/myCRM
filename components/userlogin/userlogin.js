'use strict';
  
angular.module('UserLogin')
  
.controller('UserLoginCtrl',
    ['$scope', '$rootScope', '$location', 'UserLoginService',
    function ($scope, $rootScope, $location, UserLoginService) {
        // reset login status
        UserLoginService.ClearCredentials();
  
        $scope.login = function () {
            $scope.dataLoading = true;
            UserLoginService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    UserLoginService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);


