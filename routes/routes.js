import registerController from '../compositions/booking-page/controller';
import registerView from '../compositions/booking-page/template.html';

export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    
    $urlRouterProvider.otherwise('/register');

    $stateProvider
        .state('home', {
            url       : '/register',
            template  : registerView,
            controller: registerController
        });
}