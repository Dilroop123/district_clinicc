var sampleApp = angular.module('sampleApp',[]);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowOrder/:orderId', {
	templateUrl: 'show_order.html',
	controller: 'ShowOrderController'
      });
}]);


sampleApp.controller('ShowOrderController', function($scope, $routeParams) {

	
   $scope.personalDetails = [
	        {
	             'fname':'fever',
	            'lname':'Abraham',
	            'email':'john@john.com'
	        
	        },
	        {
	            'fname':'Anameia',
	            'lname':'Abraham',
	            'email':'john@john.com'
	        },
	        {
	            'fname':'Dengue',
	            'lname':'Mathew',
	            'email':'roy@roy.com'
	        }];
			$scope.order_id = $routeParams.orderId;
			console.log($scope.order_id);

			
			 $scope.addNew = function(personalDetails){
	            $scope.personalDetails.push({ 
	                'fname': personalDetails.fname, 
	                'lname': personalDetails.lname,
	                'email': personalDetails.email,
	            });
	            $scope.PD = {};
	        };
			
			
			
		$scope.removeRow = function (idx) {
  $scope.personalDetails.splice(idx, 1);
};
			
			
});