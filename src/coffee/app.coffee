demoApp = angular.module 'demoApp',[]

demoApp.controller 'directiveCtrl',($scope)->
    $scope.customer = { name:'Banxi',address:'Nanning Huojiu road 15'}

demoApp.directive 'myCustomer',->
    {template:'姓名:{{customer.name}} 地址:{{customer.address}}'}

window.demoApp = demoApp
