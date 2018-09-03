var app = angular.module('Site', ['ui.router']);
app.constant('HOST', 'http://192.168.0.8:3000');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/');

    var avisosState = {
        name: 'home',
        url: '/',
        views: {
            '': {
                templateUrl: '../public/pages/lista.html',
                controller: 'HotelController'
            }
        }
    }
    $stateProvider.state(avisosState);

}]);
