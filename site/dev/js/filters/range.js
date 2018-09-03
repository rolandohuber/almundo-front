app.filter('range', function () {
    return function (list, total) {
        total = parseInt(total, 10);
        for (var i = 0; i < total; i++) {
            list.push(i);
        }
        return list;
    };
});