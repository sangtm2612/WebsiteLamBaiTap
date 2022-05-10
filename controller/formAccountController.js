// const api = "http://localhost:3000/sv";

function formAccountController($scope, $rootScope, $http) {
  $rootScope.index = -1;
  $rootScope.sv = { gender: "1" };
  $scope.isSuccess = true;
  $scope.message = "";

  $scope.onInsert = function () {
    if ($scope.sv.pass != $scope.sv.pass1) {
      $scope.isSuccess = false;
      $scope.message = "Mật khẩu không khớp!";
      return;
    }
    $scope.sv.id = null;
    $http.post(api, $scope.sv)
      .then(function (response) {
        console.log(response);
      });
      $scope.message = "Thêm thành công!"
  }

  $scope.onUpdate = function () {
    $scope.sv.id = null;
    $http.put(apiUpdate, $scope.sv)
      .then(function (response) {
        console.log(response.data);
      })
  }

  $scope.onClear = function () {
    $rootScope.index = -1;
    $rootScope.sv = { gender: "1" };
    $scope.isSuccess = true;
    $scope.message = "";
  }

  $scope.onDelete = function () {
    console.log(apiUpdate);
    $http.delete(apiUpdate, $scope.sv)
      .then(function (response) {
        console.log(response)
      })
  }

  $scope.onInsert = function (e) {
    if ($scope.sv.pass != $scope.sv.pass1) {
      $scope.isSuccess = false;
      $scope.message = "Mật khẩu không khớp!";
      return;
    }
    $scope.sv.id = null;
    $http.post(api, $scope.sv)
      .then(function (response) {
        console.log(response);
      });
      $scope.message = "Thêm thành công!";
      e.prevenDefault();
  }
}