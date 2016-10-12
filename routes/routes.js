export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('default', {
            url: '/?token',
            template: '<hello-world author="{{launch.data.author}}"></hello-world>',
            controller: stateController,
            controllerAs: 'launch'
        });
}

function stateController($scope, appName) {
    'ngInject';
    this.data = {
      author: 'Pratik Bhurewar',
      appName: 'app',
      description: 'description is long'
    };

}