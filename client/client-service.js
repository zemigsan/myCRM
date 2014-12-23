angular.module('myCRMClients')

.factory('ClientService', function($http) {
    return {
        
        
        findAll: function() {
            return $http.get(SERVER_URL + '/clients');
        },
        
        create: function(post) {
            return $http.post(SERVER_URL + '/clients/add', post);
        },

        findById: function(id) {
            return $http.get(SERVER_URL + '/clients/' + id);
        }
    };
});