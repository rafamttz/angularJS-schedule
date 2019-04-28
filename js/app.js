angular.module("listaTelefonica", ["ngMessages"]).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from outer templates domain.
        'views\footer.html'
    ]); 
});