(function() {
  var demoApp;

  demoApp = angular.module('demoApp', []);

  demoApp.controller('directiveCtrl', function($scope) {
    return $scope.customer = {
      name: 'Banxi',
      address: 'Nanning Huojiu road 15'
    };
  });

  demoApp.directive('myCustomer', function() {
    return {
      template: '姓名:{{customer.name}} 地址:{{customer.address}}'
    };
  });

  window.demoApp = demoApp;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE9BQUE7O0FBQUEsRUFBQSxPQUFBLEdBQVUsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmLEVBQXlCLEVBQXpCLENBQVYsQ0FBQTs7QUFBQSxFQUVBLE9BQU8sQ0FBQyxVQUFSLENBQW1CLGVBQW5CLEVBQW1DLFNBQUMsTUFBRCxHQUFBO1dBQy9CLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO0FBQUEsTUFBRSxJQUFBLEVBQUssT0FBUDtBQUFBLE1BQWUsT0FBQSxFQUFRLHdCQUF2QjtNQURhO0VBQUEsQ0FBbkMsQ0FGQSxDQUFBOztBQUFBLEVBS0EsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsWUFBbEIsRUFBK0IsU0FBQSxHQUFBO1dBQzNCO0FBQUEsTUFBQyxRQUFBLEVBQVMsOENBQVY7TUFEMkI7RUFBQSxDQUEvQixDQUxBLENBQUE7O0FBQUEsRUFRQSxNQUFNLENBQUMsT0FBUCxHQUFpQixPQVJqQixDQUFBO0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVtb0FwcCA9IGFuZ3VsYXIubW9kdWxlICdkZW1vQXBwJyxbXVxuXG5kZW1vQXBwLmNvbnRyb2xsZXIgJ2RpcmVjdGl2ZUN0cmwnLCgkc2NvcGUpLT5cbiAgICAkc2NvcGUuY3VzdG9tZXIgPSB7IG5hbWU6J0JhbnhpJyxhZGRyZXNzOidOYW5uaW5nIEh1b2ppdSByb2FkIDE1J31cblxuZGVtb0FwcC5kaXJlY3RpdmUgJ215Q3VzdG9tZXInLC0+XG4gICAge3RlbXBsYXRlOiflp5PlkI06e3tjdXN0b21lci5uYW1lfX0g5Zyw5Z2AOnt7Y3VzdG9tZXIuYWRkcmVzc319J31cblxud2luZG93LmRlbW9BcHAgPSBkZW1vQXBwXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=