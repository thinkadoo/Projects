/**
 * Created with JetBrains PhpStorm.
 * User: nomad
 * Date: 2013/01/08
 * Time: 12:12 PM
 */

/*global can, Models, $ */
(function (namespace, undefined) {
    'use strict';

    var Detail = can.Control({
        // Default options
        defaults : {
            view : 'views/detail.ejs'
        }
    }, {
        // Initialize
        init: function() {
            //this.element.append(can.view(this.options.view, this.options))
        },
        show: function(){
            //console.log(this.options.credentials);
            this.element.html(can.view('views/detail.ejs', {}));
            this.element.slideDown(200);
            $("#menu ul li").removeClass("active");
            $("#detail").addClass("active");
        },
        hide: function(){
            this.element.slideUp(200);
        },
        "detail route": function(){
            console.log(can.route.attr());
            if(this.options.credentials.attr('username') === this.options.secret.attr('username') && this.options.credentials.attr('password') === this.options.secret.attr('password')){
                this.show();

                Theme.init ();

                $('.my-stat').cirque ({value: 234, total: 765, arcColor: '#FF9900'});

                var d1 = [3.0, 3.0, 4.2, 4.4, 1.3, 2.9, 2.8, 1.9, 2.1, 3.4, 6.8, 8.1, 7.5, 7.1, 7.5, 9.5, 12.1, 12.4, 10.9, 10.4, 10.9, 9.1, 9.4, 10.5],
                    d2 = [ 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3, 3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 2.4, 2.7, 3.5, 3.2, 2.8];

                var dt1 = [],
                    dt2 = [],
                    st = new Date(2012, 8, 6).getTime();

                for( var i = 0; i < d2.length; i++ ) {
                    dt1.push([st + i * 3600000, parseFloat( (d1[i]).toFixed( 3 ) )]);
                    dt2.push([st + i * 3600000, parseFloat( (d2[i]).toFixed( 3 ) )]);
                }

                var data = [{
                    data: dt1,
                    label: 'Revenue'
                }, {
                    data: dt2,
                    label: 'Expenses',
                    points: { show: false },
                    lines: { lineWidth: 2, fill: false }
                }];

                Charts.line ( '#line-chart', data);

                var data = [
                    { label: "Manufacturing", data: Math.floor (Math.random() * 100 + 650) },
                    { label: "Finance", data: Math.floor (Math.random() * 100 + 250) },
                    { label: "Energy & Utilities", data: Math.floor (Math.random() * 100 + 50) }
                ];

                Charts.donut ('#donut-chart', data);

                var data = [
                    { label: "Manufacturing", data: Math.floor (Math.random() * 100 + 250) },
                    { label: "Finance", data: Math.floor (Math.random() * 100 + 350) },
                    { label: "Energy & Utilities", data: Math.floor (Math.random() * 100 + 650) },
                    { label: "Advertising & Marketing", data: Math.floor (Math.random() * 100 + 50) },
                    { label: "Professional Services", data: Math.floor (Math.random() * 100 + 250) }
                ];

                Charts.pie ('#pie-chart', data);

                var ds = [];
                var data = [];

                ds.push ([[1,25],[2,34],[3,37],[4,45],[5,56]]);
                ds.push ([[1,13],[2,29],[3,25],[4,23],[5,31]]);
                ds.push ([[1,8],[2,13],[3,19],[4,15],[5,14]]);

                data.push ({
                    data: ds[0],
                    label: 'Finance',
                    bars: {
                        barWidth: 0.15,
                        order: 1
                    }
                });
                data.push	({
                    data: ds[1],
                    label: 'Advertising & Marketing',
                    bars: {
                        barWidth: 0.15,
                        order: 2
                    }
                });
                data.push ({
                    data: ds[2],
                    label: 'Manufacturing',
                    bars: {
                        barWidth: 0.15,
                        order: 3
                    }
                });

                Charts.vertical ('#vertical-chart', data);
                var ds = [];
                var data = [];

                ds.push ([[25, 1],[34, 2],[37, 3],[45, 4],[56, 5]]);
                ds.push ([[13, 1],[29, 2],[25, 3],[23, 4],[31, 5]]);
                ds.push ([[8, 1],[13, 2],[19, 3],[15, 4],[14, 5]]);

                data.push ({
                    data: ds[0],
                    label: 'Manufacturing',
                    bars: {
                        order: 1
                    }
                });

                data.push ({
                    data: ds[1],
                    label: 'Energy & Utilities',
                    bars: {
                        order: 2
                    }
                });

                data.push ({
                    data: ds[2],
                    label: 'Professional Services',
                    bars: {
                        order: 3
                    }
                });

                Charts.horizontal ('#horizontal-chart', data);



            }
        }

    });

    namespace.Detail = Detail;
})(this);

