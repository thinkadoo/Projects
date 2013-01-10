/**
 * Created with JetBrains PhpStorm.
 * User: nomad
 * Date: 2013/01/08
 * Time: 12:13 PM
 */

/*global can, Models, $ */
(function (namespace, undefined) {
    'use strict';

    var Status = can.Control({
        // Default options
        defaults : {
            view : 'views/status.ejs'
        }
    }, {
        // Initialize
        init: function() {
            //this.element.append(can.view(this.options.view, this.options));
        },
        show: function(){
            //console.log(this.options.credentials);
            this.element.html(can.view('views/status.ejs', {}));
            this.element.slideDown(200);
            $("#menu ul li").removeClass("active");
            $("#status").addClass("active");
        },
        hide: function(){
            this.element.slideUp(200);
        },
        'status route': function(){
            if(this.options.credentials.attr('username') === this.options.secret.attr('username') && this.options.credentials.attr('password') === this.options.secret.attr('password')){
                this.show();
            }
        }

    });

    namespace.Status = Status;
})(this);
