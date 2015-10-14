/**
 * Created by ThangTheMan on 8/19/15.
 */
angular.module('ThangApp', [])
    .controller('mainController', ['$scope', function($scope) {

        $scope.message = "Hey there!";
        $scope.updateMessage = function(){
            $scope.message = message;
            $scope.updateMessage = '';
        };
        $scope.computers = [
            {name: "Macbook Pro", color: "Silver", nerdness: 7},
            {name: "SamSung", color: "Blue", nerdness: 5},
            {name: "Chrome", color: "Red", nerdness: 9}
        ];
    }]);