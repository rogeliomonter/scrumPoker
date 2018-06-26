var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.fibonacciUp = function() {
		if ($scope.n > 0) {
			$scope.n = $scope.n + 1;
		}
		if ($scope.n == 0) {
			$scope.n = 1;
		}
		if ($scope.n > 9) {
			$scope.n = 10;
		}
		getFibonacci($scope.n);
	}
	$scope.fibonacciDn = function() {
		if ($scope.n > 0) {
			$scope.n = $scope.n - 1;
		}
		if ($scope.n == 0) {
			$scope.n = 1;
		}
		getFibonacci($scope.n);
	}
	$scope.fibonacciReset = function() {
		$scope.n = 1;
		getFibonacci($scope.n);	
	}
	$scope.coffeeBreak = function(){
		$scope.f = "☕";
		$scope.text = "Receso"
		$scope.img = -1;
		$scope.coffee = !$scope.coffee;

		if($scope.coffee == false) {
			getFibonacci($scope.n);
		}
	}
	$scope.showFront = false;
	$scope.showBack = !$scope.showFront;
    $scope.flipCard = function() {
        $scope.showFront = !$scope.showFront;
        $scope.showBack = !$scope.showFront;
        $scope.isFlipped=!$scope.isFlipped;
    }
	function getFibonacci(n) {
	    var a = 0, b = 1, f = 1;
	    if (n > 1){
		    for(var i = 2; i <= n; i++) {
		        f = a + b;
		        a = b;
		        b = f;
		    }
		} else {
			f = 0.5;
		}
	    $scope.text = number2Txt(f);
	    $scope.img = n;
	    f < 1 ? f = "½h" : f < 9 ? f = f + "h": 0;
	    f > 8 ? f = Math.floor(f/8)+"d" + f%8 + "h" : 0;
	    n > 9 ? f = ">2d" : 0;
	    
	    $scope.f = f;
	    $scope.coffee = false;
	    $scope.showFront = true;
        $scope.showBack = !$scope.showFront;
	}
	$scope.fullScreen = function (){
		document.getElementById('card').webkitRequestFullScreen();
	}
	$scope.themes = [{
		value: 'dbz',
		label: 'Dragon Ball'
	}, {
		value: 'bleach',
		label: 'Bleach'
	},{
		value: 'clannad',
		label: 'Clannad'
	}];
});

function number2Txt(i) {
	var text = "";
	switch (i) {
		case 0.5: 
			text = "Media hora";
			break;
		case 1:
			text = "Una hora";
			break;
		case 2:
			text = "Dos horas";
			break;
		case 3:
			text = "Tres horas";
			break;
		case 5:
			text = "Cinco horas";
			break;
		case 8:
			text = "Ocho horas / Un día";
			break;
		case 13:
			text = "Un dia y Cinco horas";
			break;
		case 21:
			text = "Dos dias y Cinco horas";
			break;
		case 34:
			text = "Cuatro días y Dos horas";
		default: 
			break;
	}
	i > 34 ? text = "Mas de dos dias" : 0;
	return text;
}