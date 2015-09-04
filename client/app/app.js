angular.module('spkr', [
  'spkr.auth',
  'spkr.feedback-form',
  'spkr.homepage',
  'spkr.new-form',
  'spkr.previous-forms',
  'spkr.services',
  'ngRoute' 
  ]
) 

.config(function($routeProvider, $httpProvider) {
  $routeProvider

    .when('/landing', {
      templateUrl: 'app/auth/landing.html',
      controller: 'AuthController'
    })

    .when('/login', {
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })

    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })

    .when('/feedback-form', {
      templateUrl: 'app/feedback-form/feedback-form.html',
      controller: 'FeedbackController'
    })

    .when('/homepage', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'HomepageController'
    })

    .when('/new-form', {
      templateUrl: 'app/new-form/newForm.html',
      controller: 'NewFormController'
    })  

    .when('/previous-forms', {
      templateUrl: 'app/previous-forms/previousForms.html',
      controller: 'PrevFormsController'
    })
    .when('/logout', {
      templateUrl: 'app/auth/login.html'
      //controller: 'PrevFormsController'
    })

//     // We add our $httpInterceptor into the array
//     // of interceptors. Think of it like middleware for your ajax calls
//     $httpProvider.interceptors.push('AttachTokens');
// })



// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.spkr');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to login/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/login');
//     }
//   });
});
