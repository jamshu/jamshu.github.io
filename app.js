(function(){
	'use strict'
	var app = angular.module('blogApp',['ngMaterial','ngSanitize']);
	app.controller('ListCtrl',function($scope,$http,$sce){
		$scope.stories=[];
		$http.get('https://www.googleapis.com/blogger/v3/blogs/2157987953405013245/posts?key=AIzaSyCd6eRhEi89naUMUoQieMA_ZdPiSC7pZLU')
		.success(function(response){
			console.log(response)
			angular.forEach(response.items,function(item){
      		$scope.stories.push(item)
    		})
		})
		$scope.technology = [{name:'Javascript/HTML5'},{name:'Odoo'},{name:'AngularJs'},{name:'Ionic Cordova'},{name:'Jquery'},{name:'BackBone'},{name:'QWeb'},{name:'Flask'}]
	});

	app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
})();
