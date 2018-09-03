app.service('HotelService', ['$http', 'HOST', function ($http, HOST) {

    this.list = function (filter) {
        return $http({
            url: HOST + '/hotel/search',
            method: 'POST',
            timeout: 45000,
            data: filter
        });
    }

}]);