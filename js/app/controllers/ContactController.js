function ContactController() {
  var vm = this

    vm.name = 'Bill Gates';

    vm.changeName = function () {
      vm.name = "Bob Gutes"
    }
    vm.changeBack = function () {
      vm.name = 'Bill Gates'
    }

}

angular
    .module('app')
    .controller('ContactController', ContactController);
