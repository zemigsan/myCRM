'use strict';

/* Controllers */

angular.module('myCRMClients')


.controller('ClientListCtrl',  ['$scope','$http','$timeout', '$templateCache', 'ClientService', 
                                function($scope, $http,$timeout, $templateCache, ClientService) {
    

  $scope.codeStatus = "";
    
  $scope.save = function() {
    var formData = {
      name : this.name,
      
      
	  email : this.email,
        phone : this.phone,
        origin : this.origin
    };
	this.name = '';
	this.phone = '';
      this.origin = '';
	this.email = '';
	
	console.log(formData);
	//var jdata = JSON.stringify(formData);
	//console.log(JSON.stringify(formData));
      
    var res = ClientService.create(formData);
		res.success(function(data, status, headers, config) {
			//console.log("success");
            $scope.codeStatus = data;
		    
            $scope.list(); //update list
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});	  
    

    return false;
  };	

  
  $scope.list = function() {
      console.log("sending request with " + $http.defaults.headers.common['Authorization']);
      
      
      ClientService.findAll().success(function(data) {
          $scope.clients = data;
        //console.log("Client list through new method retrieved from" + url);
      }).error(function(data, status) {
            console.log(status);
            console.log(data);
        });
                                     
          
    
  };
  $scope.list();
  ;
}]);





