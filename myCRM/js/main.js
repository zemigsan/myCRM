'use strict';

var myCRMApp = angular.module('myCRMApp', [
  'ngRoute',
  'myCRMClients',
   // 'ClientListCtrl'
]);



myCRMApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

myCRMApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/clients', {
        templateUrl: 'client/client-list.html',
        controller: 'ClientListCtrl'
      }).
      /*when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).*/
      otherwise({
        redirectTo: '/clients'
      });
  }]);