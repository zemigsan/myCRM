'use strict';

/* Controllers */

angular.module('myCRMProjects')





.controller('ProjectClientCtrl',  ['$scope','$http','$routeParams', '$location','$timeout', '$templateCache','ClientService', 
                                   function($scope,$http,$routeParams, $location, $timeout, $templateCache, ClientService) {
    
            
                                       
                                       
             ClientService.findById($routeParams.clientId).success(function(data) {
          $scope.client = data;
        //console.log("Client list through new method retrieved from" + url);
      }).error(function(data, status) {
            console.log(status);
            console.log(data);
        });
            console.log("clientid: " + $routeParams.clientId);
          $scope.projects = [
                     {
                         name : 'Project1',
                         description : 'example project 1',
                         datestarted : '23-12-2014',
                         datefinished : '23-12-2014',
                         value : 100 },
              {
                         name : 'Project2',
                         description : 'example project 2',
                         datestarted : '23-12-2014',
                         datefinished : '23-12-2014',
                         value : 200 }
            
          ];
    
    }]);
