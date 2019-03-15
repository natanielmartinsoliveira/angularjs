app.factory("statusServices", function ($http) {
	var _getStatus = function () {
		return $http.get("http://localhost:4000/status");
	};

	return {
		getStatus: _getStatus
	};
});