var data = '[{"pk": 1, "model": "billiards.assistant", "fields": {"uuid": "d4e64cfe-e0d2-42e0-99a4-34b8f59d6d6b", "figure": "\u5927\u65b9", "gender": "\u5973", "coverimage": "http://billiardsalbum.bcs.duapp.com/filesystem/assistant/5a8ad8d7f99540cc6014d4bc6f1db7b_51345aebcd5f2-h300.jpg", "height": 165, "birthday": "1994-10-22", "haircolor": "\u9ed1\u53d1\u8272", "nickname": "\u84dd\u84dd"}}, {"pk": 2, "model": "billiards.assistant", "fields": {"uuid": "82115dbc-088c-49d0-9db2-4b46ce48cd00", "figure": "\u6d3b\u6ce2", "gender": "\u5973", "coverimage": "http://billiardsalbum.bcs.duapp.com/filesystem/assistant/7987f05f5a2cf427f3c3f755f2e2c57_001422474dbc0dcd7f2456-h300.jpg", "height": 158, "birthday": "1998-07-21", "haircolor": "\u9ed1\u53d1\u8272", "nickname": "\u5c0f\u7ae0"}}]';

var escortAngularModule = angular.module("escortApp", ["ngRoute", "restangular"]);
escortAngularModule.config(function($interpolateProvider) {
	  $interpolateProvider.startSymbol('//');
	  $interpolateProvider.endSymbol('//');
	});
escortAngularModule.controller("ProviderListCtrl", ["$scope", "Restangular", function($scope, Restangular) {
//	Restangular.one('assistant', 'list').get().then(function (assistants){
//    	$scope.assistants = assistants;
//    });
	$scope.assistants = jQuery.parseJSON( data );
}]);