'use strict';


// declare modules
angular.module('UserLogin', []);
angular.module('myCRMClients', []);
angular.module('myCRMProjects', []);
 

var myCRMApp = angular.module('myCRMApp', [
  'ngRoute',
  'ngCookies',
  'myCRMClients',
  'myCRMProjects',
  'UserLogin'
   // 'ClientListCtrl'
]);




myCRMApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);


myCRMApp.config(['$locationProvider','$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider.
      when('/clients', {
        templateUrl: 'client/client-list.html',
        controller: 'ClientListCtrl'
      }).
        when('/projects/:clientId', {
        templateUrl: 'project/projects-by-client.html',
        controller: 'ProjectClientCtrl'
      }).
      when('/login', {
            controller: 'UserLoginCtrl',
            templateUrl: 'components/userlogin/userlogin.html',
            //hideMenus: true
        }).
      
      otherwise({
        redirectTo: '/clients'
      });
    // enable html5Mode for pushstate ('#'-less URLs)
    //$locationProvider.html5Mode(true);  
  }]);


 myCRMApp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        // console.log("current user test (cookie): " + $rootScope.globals.currentUser.authdata || {});
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
                console.log("redirected to login");
                console.log("current user (cookie): " + $cookieStore.get('globals').currentUser.authdata);
            }
        });
    }]);

