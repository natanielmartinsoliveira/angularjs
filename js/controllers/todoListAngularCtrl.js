app.controller("todoListAngularCtrl", function ($scope, toDoList, listServices, status, $location) {
	$scope.app = "To do List ";
	$scope.toDoList = toDoList.data;
	$scope.status = status.data;

	$scope.addTask = function (item) {
		console.log(item);
		listServices.saveItem(item).success(function (data) {
			delete $scope.task;
			$scope.taskForm.$setPristine();
			$location.path("/");
		});
	};
	$scope.delTask = function (items) {
		items.forEach(function (item) {
			if (item.selectedValue) {
				listServices.deleteItem(item.id).success(function (data) {
					$scope.toDoList = data;
					$location.path("/");
				});
			}	
		});
	};

	$scope.change = function (item, status) {
		listServices.putItem(item, status).success(function (data) {
			$location.path("/");
		});
	};

	$scope.hasSelected = function (items) {
		return items.some(function (item) {
			return item.selectedValue;
		});
	};


	
});