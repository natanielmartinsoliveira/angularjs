app.factory("listServices", function ($http) {
	var _getItems = function () {
		return $http.get("http://localhost:4000/list");
	};

	var _getStatus = function () {
		return $http.get("http://localhost:4000/status");
	};

	var _getItem = function (id) {
		// PHP: $http.get(config.baseUrl + "/contatosBackend.php?id=" + id)
		return $http.get("http://localhost:4000/list/" + id);
	};

	var _saveItem = function (item) {
		return $http.post("http://localhost:4000/list", item);
	};

	return {
		getItems: _getItems,
		getItem: _getItem,
		getStatus: _getStatus,
		saveItem: _saveItem
	};
});