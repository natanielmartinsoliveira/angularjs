app.directive('uMenubarscope', function () {
  return {
    restrict: 'E',
    templateUrl:'view/toolbar.html',
    controller: function ($scope) {
      $scope.linkList = [{name: 'Home', link:'#/',  active :'active'}, {name: 'New task', link:'#/new', active :''}, {name: 'Contact', link:'#/contat', active:''}];
      this.add = function () {
        $scope.linkList.push({name: "new Guy"});
      }
      return this;
    }
  }
});

app.directive('menuList', function () {
  return {
    restrict: 'E',
    template: '<li class="nav-item" ng-repeat="item in linkList"><a class="nav-link {{item.active}}" href="{{item.link}}">{{item.name}}</a></li>'
  }
});
