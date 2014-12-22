'use strict';

/* Controllers */

var ClientControllers = angular.module('myCRMClients', []);



ClientControllers.controller('ClientListCtrl',  ["$scope","$http","$timeout", "$templateCache", function($scope, $http,$timeout, $templateCache) {
  var method = 'POST';
  var inserturl = SERVER_URL + '/clients';
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
	console.log(JSON.stringify(formData));
      
    var res = $http.post(inserturl, formData);
		res.success(function(data, status, headers, config) {
			console.log("success");
            $scope.codeStatus = data;
		    console.log($scope.codeStatus);
            $scope.list(); //update list
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});	  
    

    return false;
  };	

  
  $scope.list = function() {
	  var url = SERVER_URL + '/clients';
      $http.get(url).success(function(data) {
		$scope.clients = data;
        console.log("Client list retrieved from" + url);
	  });
  };
  $scope.list();
  ;
}]);


ClientControllers.directive('myCustomer', function() {
  return {
    templateUrl: 'my-customer.html'
  };

});


