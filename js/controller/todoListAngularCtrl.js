app.controller("todoListAngularCtrl", function ($scope, toDoList, status) {
	$scope.app = "To do List ";
	$scope.toDoList = toDoList.data;
	$scope.status = status.data;

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	
});