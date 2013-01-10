/*global can, Models, $ */
(function (namespace, undefined) {
    'use strict';

    var Signin = can.Control({
        // Default options
    }, {
        // Initialize
        init: function() {
            var that = this;
            if(this.options.credentials.attr('username') === this.options.secret.attr('username') && this.options.credentials.attr('password') === this.options.secret.attr('password')){
                this.show();
            }else{
                this.signinshow();
            }
            $("#home").addClass("active");
        },
        show: function(){
            this.element.html(can.view('views/home.ejs', {}));
            this.element.slideDown(200);
            $("#menu ul li").removeClass("active");
            $("#home").addClass("active");
        },
        signinshow: function(){
            this.element.html(can.view('views/signin.ejs', {}));
            this.element.slideDown(200);
            $("#menu ul li").removeClass("active");
            $("#home").addClass("active");
        },
        hide: function(){
            this.element.slideUp(200);
        },
        '{document} #home click': function(){
            if(this.options.credentials.attr('username') === this.options.secret.attr('username') && this.options.credentials.attr('password') === this.options.secret.attr('password')){
                this.show();
            }else{
                this.signinshow();
            }
        },
        '{document} #password focusout': function(el,e){
            var psswd = el[0].value;
            console.log(psswd);
            this.options.credentials.attr({'password':psswd});
            this.options.credentials
        },
        '{document} #username focusout': function(el,e){
            var usrn = el[0].value;
            console.log(usrn);
            this.options.credentials.attr({'username':usrn});
            this.options.credentials
        },
        '{document} #signin click': function(){
            if(this.options.credentials.attr('username') === this.options.secret.attr('username') && this.options.credentials.attr('password') === this.options.secret.attr('password')){
                this.show();
            }
        },
        '{document} #signout click': function(){
            this.options.credentials.attr('username','');
            this.options.credentials.attr('password','');
            this.signinshow();
        }

    });

    namespace.Signin = Signin;
})(this);

