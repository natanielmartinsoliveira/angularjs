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

app.directive('searchIsolate', function () {
  return {
    restrict: 'E',
    template: '<form class="form-inline my-2 my-lg-0"><input-find></input-find><button-find></button-find></form>',
    scope: {}
  }
});

app.directive('inputFind', function () {
  return {
    restrict: 'E',
    template: '<input class="form-control mr-sm-2" type="search" placeholder="What you search?" aria-label="Search" ng-model="paramsSearch" >',
    scope: {}
  }
})

app.directive('buttonFind', function () {
  return {
    restict: 'E',
    scope: {},
    template: '<button class="btn btn-outline-success my-2 my-sm-0" type="submit" ng-click="filterSearch = paramsSearch" >Search</button>'
  }
});