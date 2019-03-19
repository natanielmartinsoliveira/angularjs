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
    template: '<form class="form-inline my-2 my-lg-0"><input-find></input-find><button-find></button-find></form>'
  }
});

app.directive('inputFind', function () {
  return {
    restrict: 'E',
    require: '^?searchIsolate',
    template: '<input class="form-control mr-sm-2" type="search" placeholder="What you search?" aria-label="Search" ng-model="paramsSearch" >'
  }
})

app.directive('buttonFind', function () {
  return {
    restict: 'E',
    require: '^?searchIsolate',
    template: "<button-action color-button='outline-success' ng-click='filterSearch = paramsSearch' other-class='my-2 my-sm-0' >Search</button-action>" 
  }
});


app.directive('contentBody', function () {
  return {
    restrict: 'E',
    transclude:true,
    template: '<div class="jumbotron" ng-transclude></div>'
  }
});

app.directive('listTable', function () {
  return {
    restrict: 'E',
    templateUrl:'view/tableList.html'
    
  }
});

app.directive('selectOption', function () {
  return {
    restrict: 'E',
    templateUrl:'view/selectOptions.html',
    scope:{
      inner:'=',
      data:'=',
      databyid:'='
    },
    link: function(scope, element, attributes, controller){
      element.bind('change', function (e) {
        scope.$eval(attributes.anotherFunc); 
      });
    }   

  }
});

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
