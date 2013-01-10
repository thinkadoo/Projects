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
                $('.my-stat').cirque ({value: 234, total: 765, arcColor: '#FF9900'});
            }
        }

    });

    namespace.Detail = Detail;
})(this);

