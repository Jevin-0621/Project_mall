define(['jcookie'], function() {
    return {
        init: function() {

            let $sid = location.search.substring(1).split('=')[1];
            // console.log($sid);
            if (!$sid) {
                $sid = 1;
            }
            $.ajax({
                url: 'http://localhost/dashboard/Javascript/1000phone/myworks/dec/12.4jQuery%e6%95%88%e6%9e%9c/projectname/php/detail.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                console.log(data);
                $('#smallpic').attr('src', data.url);
                $('.loadtitle').html(data.title);
                $('.loadpcp').html(data.price);

                let $picurl = data.urls.split(',');
                let $strhtml = '';
                const $list = $('#list');
                $.each($picurl, function(index, value) {
                    $strhtml += `
            <li>
                <img src='${value}'/>
            </li>
            `;
                });
                $list.html($strhtml);
            });
            //购物车
            let arrsid = [];
            let arrnum = [];

            function getcookietoarray() {
                if (cookie.get('cookiesid') && cookie.get('cookienum')) {
                    arrsid = cookie.get('cookiesid').split(',');
                    arrnum = cookie.get('cookienum').split(',');
                }
            }
            $('.p-btn a').on('click', function() {
                getcookietoarray();
                //inArrar(查找内容,查找的数组);
                if ($.inArray($sid, arrsid) == -1) {
                    arrsid.push($sid);
                    cookie.set('cookiesid', arrsid, 10);
                    arrnum.push($('#count').val());
                    cookie.set('cookienum', arrnum, 10);
                } else {
                    let $index = $.inArray($sid, arrsid);
                    arrnum[$index] = parseInt(arrnum[$index]) + parseInt($('#count').val());
                    cookie.set('cookienum', arrnum, 10);
                }
                alert('按钮被点击了');
            });
        }
    }
})