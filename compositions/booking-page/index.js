import youAreComponent from '../../components/you-are';

const MODULE_NAME = 'takeMeThere.register';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .component('youAre', youAreComponent);