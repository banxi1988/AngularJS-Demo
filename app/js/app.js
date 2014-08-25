(function() {
  var demoApp;

  demoApp = angular.module('demoApp', []);

  demoApp.controller('directiveCtrl', function($scope) {
    $scope.zhangshan = {
      name: 'Banxi',
      address: 'Nanning Huojiu road 15'
    };
    $scope.lisi = {
      name: 'Igor',
      address: 'Beijing road 35'
    };
    return $scope.format = 'M/d/yy h:mm:ss a';
  });

  demoApp.directive('myCustomerHtml', function() {
    return {
      templateUrl: 'my_customer_html.html',
      restrict: 'AE',
      scope: {
        person: '='
      }
    };
  });

  demoApp.directive('myCustomer', function() {
    return {
      template: '姓名:{{customer.name}} 地址:{{customer.address}}'
    };
  });

  demoApp.directive('myCurrentTime', [
    '$interval', 'dateFilter', function($interval, dateFilter) {
      var link;
      link = function(scope, element, attrs) {
        var format, timeoutId, updateTime;
        format = null;
        updateTime = function() {
          return element.text(dateFilter(new Date(), format));
        };
        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          return updateTime();
        });
        element.on('$destory', function() {
          return $interval.cancel(timeoutId);
        });
        return timeoutId = $interval(function() {
          return updateTime();
        }, 1000);
      };
      return {
        link: link
      };
    }
  ]);

  demoApp.controller('scopeCtrl', function($scope) {
    $scope.username = 'world';
    return $scope.greet = function() {
      return $scope.greeting = 'hello ' + $scope.username + '!';
    };
  });

  demoApp.controller('eventCtrl', function($scope) {
    $scope.count = 0;
    return $scope.$on('MyEvent', function() {
      return $scope.count++;
    });
  });

  window.demoApp = demoApp;

}).call(this);

//# sourceMappingURL=data:application/json;base64,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R0FBQTtBQUMzQixJQUFBLE1BQU0sQ0FBQyxLQUFQLEdBQWUsQ0FBZixDQUFBO1dBQ0EsTUFBTSxDQUFDLEdBQVAsQ0FBVyxTQUFYLEVBQXFCLFNBQUEsR0FBQTthQUFHLE1BQU0sQ0FBQyxLQUFQLEdBQUg7SUFBQSxDQUFyQixFQUYyQjtFQUFBLENBQS9CLENBdENBLENBQUE7O0FBQUEsRUF5Q0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsT0F6Q2pCLENBQUE7QUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZW1vQXBwID0gYW5ndWxhci5tb2R1bGUgJ2RlbW9BcHAnLFtdXG5cbmRlbW9BcHAuY29udHJvbGxlciAnZGlyZWN0aXZlQ3RybCcsKCRzY29wZSktPlxuICAgICRzY29wZS56aGFuZ3NoYW4gPSB7IG5hbWU6J0JhbnhpJyxhZGRyZXNzOidOYW5uaW5nIEh1b2ppdSByb2FkIDE1J31cbiAgICAkc2NvcGUubGlzaSA9IHsgbmFtZTonSWdvcicsYWRkcmVzczonQmVpamluZyByb2FkIDM1J31cbiAgICAkc2NvcGUuZm9ybWF0ID0gJ00vZC95eSBoOm1tOnNzIGEnO1xuXG5kZW1vQXBwLmRpcmVjdGl2ZSAnbXlDdXN0b21lckh0bWwnLC0+XG4gICAge1xuICAgICAgICB0ZW1wbGF0ZVVybDonbXlfY3VzdG9tZXJfaHRtbC5odG1sJyxcbiAgICAgICAgcmVzdHJpY3Q6J0FFJyxcbiAgICAgICAgc2NvcGU6e3BlcnNvbjonPSd9XG4gICAgfVxuXG5kZW1vQXBwLmRpcmVjdGl2ZSAnbXlDdXN0b21lcicsLT5cbiAgICB7dGVtcGxhdGU6J+Wnk+WQjTp7e2N1c3RvbWVyLm5hbWV9fSDlnLDlnYA6e3tjdXN0b21lci5hZGRyZXNzfX0nfVxuXG5kZW1vQXBwLmRpcmVjdGl2ZSAnbXlDdXJyZW50VGltZScsIFtcbiAgICAgICAgJyRpbnRlcnZhbCcsICdkYXRlRmlsdGVyJywgKCRpbnRlcnZhbCwgZGF0ZUZpbHRlciktPlxuICAgICAgICAgICAgbGluayA9IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gbnVsbFxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUgPSAtPiBlbGVtZW50LnRleHQgZGF0ZUZpbHRlciBuZXcgRGF0ZSgpLGZvcm1hdFxuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaCBhdHRycy5teUN1cnJlbnRUaW1lLCAodmFsdWUpLT5cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbiAnJGRlc3RvcnknLC0+ICRpbnRlcnZhbC5jYW5jZWwgdGltZW91dElkXG4gICAgICAgICAgICAgICAgIyBzdGFydCB0aGUgdWkgdXBkYXRlIHByb2Nlc3M7IHNhdmUgdGhlIHRpbWVvdXRpZCBmb3IgY2FuY2VsbGluZ1xuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9ICRpbnRlcnZhbCggLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKVxuICAgICAgICAgICAgICAgICAgICAsMTAwMClcblxuICAgICAgICAgICAgcmV0dXJuIHtsaW5rOmxpbmt9XG4gICAgXVxuZGVtb0FwcC5jb250cm9sbGVyICdzY29wZUN0cmwnLCgkc2NvcGUpIC0+XG4gICAgJHNjb3BlLnVzZXJuYW1lID0gJ3dvcmxkJ1xuICAgICRzY29wZS5ncmVldCA9ICAtPlxuICAgICAgICAkc2NvcGUuZ3JlZXRpbmcgID0gJ2hlbGxvICcrJHNjb3BlLnVzZXJuYW1lKychJ1xuXG5kZW1vQXBwLmNvbnRyb2xsZXIgJ2V2ZW50Q3RybCcsKCRzY29wZSkgLT5cbiAgICAkc2NvcGUuY291bnQgPSAwXG4gICAgJHNjb3BlLiRvbiAnTXlFdmVudCcsLT4gJHNjb3BlLmNvdW50KytcbndpbmRvdy5kZW1vQXBwID0gZGVtb0FwcFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9