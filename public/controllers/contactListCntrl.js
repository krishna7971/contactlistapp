(function() {
	'use strict';
	angular.module('contactListApp', []).controller('contactListCntrls', ['$scope','$http', function($scope,$http) {
			$scope.model = {};
			$scope.contectList = [];
			var loadAllList = function(){
				$http({
					 	method: 'GET',
					 	url: '/contactList'
				 	}).then(function (success){
				 		$scope.contectList = success.data;
				 	},function (error){

			 	});
			};
			 loadAllList();
			$scope.doClear = function(){
				$scope.model = {};
			};
			$scope.addRecord = function(){
				$http({
				 	method: 'POST',
				 	url: '/addContactList',
				 	data:$scope.model
			 	}).then(function (success){
	 				console.log(success.data);
	 				loadAllList();
			 	},function (error){

			 	});
				$scope.doClear();
			};
			$scope.removeContactList = function(id){
				$http({
				 	method: 'DELETE',
				 	url: '/removeContactList/'+id
			 	}).then(function (success){
	 				console.log(success.data);
	 				loadAllList();
			 	},function (error){

			 	});
				
			};

			
		}
	]);
})();
