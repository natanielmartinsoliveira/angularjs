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

	var _deleteItem = function (id) {
		return $http.delete("http://localhost:4000/list/"+ id);
	};

	var _putItem = function (id, status) {
		return $http.put("http://localhost:4000/list/"+ id, status);
	};

	return {
		getItems: _getItems,
		getItem: _getItem,
		getStatus: _getStatus,
		saveItem: _saveItem,
		deleteItem: _deleteItem,
		putItem: _putItem
	};
});