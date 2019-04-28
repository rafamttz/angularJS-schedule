angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI) {
                
    // Var's e $scope's

    $scope.app = "lista telefonica";
    $scope.selecionado = "selecionado";

    $scope.contatos = [];
    $scope.operadoras = [];


    // Carregando info

    var carregarContatos = function() {
        contatosAPI.buscaContatos().then(function(response) {
            $scope.contatos = response.data;
            console.log($scope.contatos);
            
        }).catch(function(response) {
            console.log(response);
        });
    }

    var carregarOperadoras = function() {
        contatosAPI.buscaOperadoras().then(function(response) {
            $scope.operadoras = response.data;
            console.log($scope.operadoras);
            
        }).catch(function(response) {
            console.log(response);
        });
    }

    carregarContatos();
    carregarOperadoras();

    // Métodos

    $scope.adicionarContato = function (contato) {
        contatosAPI.novoContato(contato).then(function(response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();

        }).catch(function(response) {
            console.log(response);
        });

    }

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    }

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    }

    $scope.ordenarPorNome = function(campo) {
        $scope.sentidoDeOrdenacao = campo;
    }
    
});