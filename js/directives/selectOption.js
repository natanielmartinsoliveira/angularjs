

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

