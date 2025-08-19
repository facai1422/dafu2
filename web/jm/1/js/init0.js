var isLogin = false;
var isLoop = true;
(function () {
    $.ajax({
        type: 'post',
        url: '/api/web-ajax/is-login',
        dataType: 'json',
        async: false,
        success: function (res) {
            isLogin = res;
        }
    });
})();