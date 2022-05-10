
const api = "http://localhost:3000/sv";

function accountController($scope, $rootScope, $http) {
  $rootScope.students = [];
  //lấy data
  $http.get(api)
    .then(function (response) {
      $scope.students = response.data;
      // console.log($scope.students);
    });
  $scope.select = function (index) {
    apiUpdate = api + "/" + $scope.students[index].id;
    $rootScope.index = index;
    $scope.$parent.sv = angular.copy($scope.students[index]);
  }
}

