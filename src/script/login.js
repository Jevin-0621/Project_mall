! function($) {
    const $username = $('#username');
    const $password = $('#password');
    const $login = $('#login');
    $login.on('click', function() {
        $.ajax({
            type: 'post',
            url: 'http://localhost/dashboard/Javascript/1000phone/myworks/dec/12.4jQuery%e6%95%88%e6%9e%9c/projectname/php/login.php',
            data: {
                user: $username.val(),
                pass: $password.val()
            }
        }).done(function(data) {
            if (!data) {
                alert('信息有误');
                $password.val(''); //密码清空
            } else {
                location.href = 'index.html';
                localStorage.setItem('loginname', $username.val());
            }
        })
    })
}(jQuery)