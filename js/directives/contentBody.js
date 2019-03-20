

app.directive('contentBody', function () {
  return {
    restrict: 'E',
    transclude:true,
    template: '<div class="jumbotron" ng-transclude></div>'
  }
});
