angular.module('myApp',['ngRoute']).config(config);

function config($routeProvider, $locationProvider)
{
    $routeProvider
    .when('/',
        {
            templateUrl: 'partials/main.html',
            controller:'MainController',
            controllerAs:'vm'
    })
    .when('/about',
    {
        templateUrl: 'partials/about.html',
        controller:'AboutController',
        controllerAs:'vm'
    })
    .otherwise({
        redirectTo:'/'
    });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}
