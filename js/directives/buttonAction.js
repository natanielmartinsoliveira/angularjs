
app.directive('buttonAction', function () {
  return {
    restrict: 'E',
    scope:{
      colorButton:'@',
      otherClass:'@', 
      linkRedirect:'@'
    },
    controller: ['$scope', '$http', '$location', function($scope, $http, $location) {
      $scope.linkButton = function (link) {
        $location.path(link);
        $scope.$apply()
      }
    }],
    link: function(scope, element, attr, controller) {
      element.bind('click', function (e) {
        scope.linkButton(attr.linkRedirect);
      });
    },
    transclude : true,
    template:'<button class="btn btn-{{ colorButton }} {{ otherClass }}" ng-transclude></button>'    
  }
});
