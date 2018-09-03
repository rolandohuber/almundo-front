app.controller('HotelController', ['$scope', 'HotelService', function ($scope, HotelService) {

    $scope.lista = [];
    $scope.filtro = {};
    $scope.filtro.stars = [];

    $('.filter-header').click(function () {
        $('.filter-body').slideToggle(500);
        $('i', this).toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.filter-name-header').click(function () {
        $('.filter-name-body').slideToggle(500);
        $('i', this).toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.filter-stars-header').click(function () {
        $('.filter-stars-body').slideToggle(500);
        $('i', this).toggleClass('fa-chevron-up fa-chevron-down');
    });

    $scope.search = function () {
        $scope.lista = [];
        HotelService.list($scope.filtro).then(function (resp) {
            $scope.lista = resp.data;
        }, function (err) {
            console.log(err);
        });
    }

    $scope.starsChange = function () {
        $scope.filtro.stars = [];
        if ($scope.fiveStar || $scope.allStar)
            $scope.filtro.stars.push('5')
        if ($scope.fourStar || $scope.allStar)
            $scope.filtro.stars.push('4')
        if ($scope.threeStar || $scope.allStar)
            $scope.filtro.stars.push('3')
        if ($scope.twoStar || $scope.allStar)
            $scope.filtro.stars.push('2')
        if ($scope.oneStar || $scope.allStar)
            $scope.filtro.stars.push('1')
        $scope.search();
    }
    $scope.search();
}]);