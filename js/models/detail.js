/**
 * Created with JetBrains PhpStorm.
 * User: nomad
 * Date: 2013/01/08
 * Time: 12:23 PM
 */

/*global can */
(function (namespace, undefined) {
    'use strict';

    //Model
    var Detail = can.Model({

    }, {});

    // List
    Detail.List = can.Model.List({

    });

    namespace.Models = namespace.Models || {};
    namespace.Models.Detail = Detail;
})(this);

