(function() {
    $(function() {
        // Set up a route that maps to the `filter` attribute
        //can.route( ':filter' );
        // Delay routing until we initialized everything
        //can.route.ready(false);

        var Credentials = new can.Observe({username:'',password:''});
        var Secret = new can.Observe({username:'user@mail.com',password:'password'});

        // Initialize the app
        var projectsMode = new Projects('#application', {'credentials':Credentials,'secret':Secret});
        var statusMode = new Status('#application', {'credentials':Credentials,'secret':Secret});
        var detailMode = new Detail('#application', {'credentials':Credentials,'secret':Secret});
        var signinMode = new Signin('#application', {'credentials':Credentials, 'projectsMode':projectsMode,'secret':Secret});

        // Now we can start routing
        //can.route.ready(true);
    });

})();
