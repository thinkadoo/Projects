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
    var Projects = can.Model({

    }, {});

    // List
    Projects.List = can.Model.List({

    });

    namespace.Models = namespace.Models || {};
    namespace.Models.Projects = Projects;
})(this);