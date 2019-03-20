

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

