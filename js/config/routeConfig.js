app.config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/list.html",
		controller: "todoListAngularCtrl",
		resolve: {
			toDoList: function (listServices) {
				return listServices.getItems();
			},
			status: function (listServices) {
				return listServices.getStatus();
			}
		}
	});

	$routeProvider.when("/new", {
		templateUrl: "view/newTask.html",
		controller: "todoListAngularCtrl",
		resolve: {
			toDoList: function (listServices) {
				return listServices.getItems();
			},
			status: function (listServices) {
				return listServices.getStatus();
			}
		}
	});

	$routeProvider.otherwise({redirectTo: "/"});
});