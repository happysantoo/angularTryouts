/**
 * test
 * @module test
 */
angular.module('test', [
        'test.config'
    ])

    .run(function ($rootScope, $state, $stateParams) {
        'use strict';

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    })

    .controller('NavigationCtrl', function ($scope, NAV_ITEMS) {
        'use strict';

        $scope.navItems = NAV_ITEMS;
    })

    .controller('HomeCtrl', function ($scope) {
        'use strict';

        $scope.heading = 'test';
    });

/**
 * test
 * @module test.config
 */
angular.module('test.config', [
        'user',
        'template.app',
        'ui.router',
        'ngCookies',
        'ngSanitize'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Home', state: 'home', sref: 'home', icon: 'glyphicon-home'},
        {title: 'About', state: 'about', sref: 'about', icon: 'glyphicon-info-sign'},
        {title: 'Contact', state: 'contact', sref: 'contact', icon: 'glyphicon-earphone'},
        {title: 'My account', state: 'user', sref: 'user.dashboard', icon: 'glyphicon-user'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/view/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/view/about.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/view/contact.tpl.html'
            });
    });

angular.module('template.app', ['app/module/mycustom/view/mycustom.tpl.html', 'app/module/user/view/user-dashboard.tpl.html', 'app/module/user/view/user-profile.tpl.html', 'app/module/user/view/user-settings.tpl.html', 'app/module/user/view/user.tpl.html', 'app/view/about.tpl.html', 'app/view/contact.tpl.html', 'app/view/footer.tpl.html', 'app/view/header.tpl.html', 'app/view/home.tpl.html']);

angular.module('app/module/mycustom/view/mycustom.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/mycustom/view/mycustom.tpl.html',
        '<div class=page-header><h1>My custom module</h1></div><p>...</p>');
}]);

angular.module('app/module/user/view/user-dashboard.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-dashboard.tpl.html',
        '<h2>Your dashboard</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user-profile.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-profile.tpl.html',
        '<h2>Manage your profile</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user-settings.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-settings.tpl.html',
        '<h2>Manage your account settings</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user.tpl.html',
        '<div class=page-header><h1>{{heading}}</h1></div><ul class="nav nav-tabs"><li ui-sref-active=active ng-repeat="module in userModules"><a ui-sref={{module.sref}}>{{module.title}}</a></li></ul><div id=user-modules ui-view=""></div>');
}]);

angular.module('app/view/about.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/about.tpl.html',
        '<div class=page-header><h1>About us!</h1></div><p>...</p>');
}]);

angular.module('app/view/contact.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/contact.tpl.html',
        '<div class=page-header><h1>Contact us!</h1></div><address>...</address>');
}]);

angular.module('app/view/footer.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/footer.tpl.html',
        '<div class="navbar navbar-inverse navbar-fixed-bottom" role=navigation><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-ex6-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class="collapse navbar-collapse navbar-ex6-collapse"><ul class="nav navbar-nav"><li><a href=#contact><span class="glyphicon glyphicon-copyright-mark"></span> 2014</a></li></ul></div></div></div>');
}]);

angular.module('app/view/header.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/header.tpl.html',
        '<div ng-controller=NavigationCtrl class="navbar navbar-inverse navbar-fixed-top"><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand ui-sref=home>test</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ng-class="{active: $state.includes(\'{{item.state}}\')}" ng-repeat="item in navItems"><a ui-sref={{item.sref}}><span ng-show=item.icon class="glyphicon {{item.icon}}"></span> {{item.title}}</a></li></ul></div></div></div>');
}]);

angular.module('app/view/home.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/home.tpl.html',
        '<div class=jumbotron ng-controller=HomeCtrl><h1>{{heading}}</h1><p>This is an AngularJS application scaffold. It\'s powered by Grunt and Bower and styled with Bootstrap.</p><p><a class="btn btn-lg btn-primary" href=#about>Learn more <span class="glyphicon glyphicon-chevron-right"></span></a></p></div>');
}]);

/**
 * test
 * @module user.config
 */
angular.module('user.config', [
        'user.dashboard',
        'user.settings',
        'user.profile',
        'ui.router'
    ])

    .constant('USER_MODULES', [
        {title: 'Dashboard', state: 'user.dashboard', sref: 'user.dashboard', icon: ''},
        {title: 'Settings', state: 'user.settings', sref: 'user.settings', icon: ''},
        {title: 'Profile', state: 'user.profile', sref: 'user.profile', icon: ''}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/user');

        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'app/module/user/view/user.tpl.html',
                controller: 'UserCtrl',
                abstract: true
            })
            .state('user.dashboard', {
                url: '/dashboard',
                templateUrl: 'app/module/user/view/user-dashboard.tpl.html',
                controller: 'UserCtrl'
            })
            .state('user.settings', {
                url: '/settings',
                templateUrl: 'app/module/user/view/user-settings.tpl.html',
                controller: 'UserCtrl'
            })
            .state('user.profile', {
                url: '/profile',
                templateUrl: 'app/module/user/view/user-profile.tpl.html',
                controller: 'UserCtrl'
            });
    });

/**
 * test
 * @module user
 */
angular.module('user', [
        'user.config'
    ])

    .controller('UserCtrl', function ($scope, USER_MODULES) {
        'use strict';

        $scope.userModules = USER_MODULES;

        $scope.heading = 'My account!';
    });

/**
 * test
 * @module user.settings
 */
angular.module('user.settings', []);

/**
 * test
 * @module user.dashboard
 */
angular.module('user.dashboard', []);

/**
 * test
 * @module user.profile
 */
angular.module('user.profile', []);
