app.filter("UpperDesc", function () {
	return function (input) {
		var descr = input.split(" ");
		var descfinal = descr.map(function (task) {
			return task.charAt(0).toUpperCase() + task.substring(1).toLowerCase();
		});
		return descfinal.join(" ");
	};
});