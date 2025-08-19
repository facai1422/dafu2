function fill_domains_list(listData) {
    var html = $("#domains_list-template").html();
    var list = [];

    $.each(listData, function (index, val) {
        list.push(formatTemplate(val, html));
    });
    $('#domains_list').empty();
    $('#domains_list').append(list.join(''));
}

function formatTemplate(dta, tmpl) {
    var format = {
        name: function (x) {
            return x
        }
    };
    return tmpl.replace(/{(\w+)}/g, function (m1, m2) {
        if (!m2)
            return "";
        return (format && format[m2]) ? format[m2](dta[m2]) : dta[m2];
    });
}

var domains_list_data = [{
        'speed': '---',
        'domain': 'https://www.chunqiucp1.com'
    },
    {
        'speed': '---',
        'domain': 'https://www.chunqiucp2.com'
    },
    {
        'speed': '---',
        'domain': 'https://www.chunqiucp3.com'
    },
    {
        'speed': '---',
        'domain': 'https://www.chunqiucp4.com'
    },
    {
        'speed': '---',
        'domain': 'https://www.chunqiucp5.com'
    },
    {
        'speed': '---',
        'domain': 'https://www.chunqiucp6.com'
    }
];

function get_domain_ping_handler(data) {
    $.ping({
        url: data['domain'],
        beforePing: function () {},
        afterPing: function (ping) {
            data.speed = ping;
            fill_domains_list(domains_list_data);
        },
        interval: 0
    });
}

fill_domains_list(domains_list_data);

domains_list_data.forEach((element) => {
    get_domain_ping_handler(element);
});

$('.recheck-btn').on('click', function () {
    domains_list_data.forEach((element) => {
        get_domain_ping_handler(element);
    });
});

$('.ip-lab').html(returnCitySN["cip"]);
$('.address-lab').html(returnCitySN["cname"]);