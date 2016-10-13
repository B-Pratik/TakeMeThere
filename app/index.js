import bookingPage from '../compositions/booking-page';
import routes from '../routes/routes';

angular.module('takeMeThere', [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.select',
    bookingPage
])
    .config(routes);