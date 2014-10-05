var data = '[{"assistant": {"uuid": "d4e64cfe-e0d2-42e0-99a4-34b8f59d6d6b", "coverimage": "http://billiardsalbum.bcs.duapp.com/filesystem/assistant/5a8ad8d7f99540cc6014d4bc6f1db7b_51345aebcd5f2.jpg", "height": 165, "birthday": "1994-10-22", "nickname": "蓝蓝", "occupation": "学生"}, "price": 90, "poolroom": {"rating": 5, "images": {"img9": {"imagepath": "/resources/poolroom/98f35377e6f1a1a9587d2b918b55bbb_助教佳佳4_4.jpg", "description": "助教佳佳4", "iscover": false}, "img8": {"imagepath": "/resources/poolroom/781d42bcf6a322466f5fdc560394268_助教佳佳3_3.jpg", "description": "助教佳佳3", "iscover": false}, "img3": {"imagepath": "/resources/poolroom/9dbf19fede5c6282477f2937bda21_IMG_1123.JPG", "description": "大厅－1", "iscover": false}, "img2": {"imagepath": "/resources/poolroom/d0b621f3dae32773ce639f9672d381f4_IMG_1110.JPG", "description": "包房", "iscover": false}, "img1": {"imagepath": "/resources/poolroom/f3100fe948a1ff838b63d50fbb11b9_IMG_1109.JPG", "description": "夜时尚", "iscover": true}, "img0": {"imagepath": "/resources/poolroom/a3bfb2de20859c18a93f3514be879_IMG_1138.JPG", "description": "吧台", "iscover": false}, "img7": {"imagepath": "/resources/poolroom/770a081831bb9d6228d3e917ab792_助教佳佳2_2.jpg", "description": "助教佳佳2", "iscover": false}, "img6": {"imagepath": "/resources/poolroom/226643b8219e7ffd81a0a972cae7e2d6_助教佳佳1_1.jpg", "description": "助教佳佳1", "iscover": false}, "img5": {"imagepath": "/resources/poolroom/f457e1bbae7e149b8e237bc7581c8549_IMG_1131.JPG", "description": "赛台", "iscover": false}, "img4": {"imagepath": "/resources/poolroom/52c3fca3cad6611ea537fcd8e59e055_IMG_1118.JPG", "description": "大厅－2", "iscover": false}}, "flags": {"nosmoking": false, "wifi_free": true, "wifi": false, "subway": true, "redbullpartner": false, "parking": true, "cafeteria": true, "parking_free": false, "nosmokingarea": false}, "uuid": "e65ff46b-58ba-4bbf-88c5-974ee0bfbc4c", "businesshours": "10:00AM-3:00AM", "address": "北京市西城区护国寺大街137号泊鑫宾馆地下一层 ", "lat": "39.9409848", "lng": "116.3797641", "size": 1000, "name": "北京夜时尚护国寺店"}}, {"assistant": {"uuid": "82115dbc-088c-49d0-9db2-4b46ce48cd00", "coverimage": "http://billiardsalbum.bcs.duapp.com/filesystem/assistant/7987f05f5a2cf427f3c3f755f2e2c57_001422474dbc0dcd7f2456.jpg", "height": 158, "birthday": "1998-07-21", "nickname": "小章", "occupation": "模特"}, "price": 100, "poolroom": {"rating": 2, "images": {}, "flags": {"nosmoking": false, "wifi_free": false, "wifi": false, "subway": false, "redbullpartner": false, "parking": false, "cafeteria": false, "parking_free": false, "nosmokingarea": false}, "uuid": "4e5cf891-36e1-48c5-a7b2-9bf4b67ecc39", "businesshours": "10:00AM-3:00AM", "address": "北京市丰台区西马厂路6号院14号楼地下一层（永辉 超市对面） ", "lat": "39.8476067", "lng": "116.3923936", "size": 500, "name": "北京夜时尚台球马家堡店"}}]';
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
	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() === BMAP_STATUS_SUCCESS){
			for (var i = 0; i < $scope.assistants.length; i++) {
				$scope.assistants[i].distance = formatDistance(distance(r.point, new BMap.Point(
						$scope.assistants[i].poolroom.lng, $scope.assistants[i].poolroom.lat
					)));
			}
			$scope.$apply();
		}
	}, {enableHighAccuracy: false});
}]);