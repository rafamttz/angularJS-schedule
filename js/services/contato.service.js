angular.module("listaTelefonica").factory("contatosAPI", function($http, config) {
    var buscaContatos = function() {
        return $http.get(config.baseUrl + 'contatos');
    };
    var buscaOperadoras = function() {
        return $http.get(config.baseUrl + 'operadoras');
    };
    var novoContato = function(contato) {
        return $http.post(config.baseUrl + 'novo/contato', contato);
    };

    return {
        buscaContatos: buscaContatos,
        buscaOperadoras: buscaOperadoras,
        novoContato: novoContato
    };
});