angular.module('friendsList')
.controller('mainCtrl', function( $scope ){

$scope.friends = [ "Michael", "Jordan", "Jackson", "Jones", "Hunter" ]

$scope.addNewFriend = function( newFriend ) {
  $scope.friends.push( newFriend.name );

  $scope.newFriend = {
    name:""
  };
}
});
