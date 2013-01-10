/**
 * Created with JetBrains PhpStorm.
 * User: nomad
 * Date: 2013/01/08
 * Time: 12:24 PM
 */

/*global can */
(function (namespace, undefined) {
    'use strict';

    //Model
    var Status = can.Model({

    }, {});

    // List
    Status.List = can.Model.List({

    });

    namespace.Models = namespace.Models || {};
    namespace.Models.Status = Status;
})(this);