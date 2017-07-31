(function () {
  angular.module('myApp', ['disable.right.click'])
    .controller('myCtrl',['$scope',function ($scope) {
      $scope.purpose = 'Disable right click';
     
  }])
})();
