demoApp = angular.module 'demoApp',[]

demoApp.controller 'directiveCtrl',($scope)->
    $scope.zhangshan = { name:'Banxi',address:'Nanning Huojiu road 15'}
    $scope.lisi = { name:'Igor',address:'Beijing road 35'}
    $scope.format = 'M/d/yy h:mm:ss a';

demoApp.directive 'myCustomerHtml',->
    {
        templateUrl:'my_customer_html.html',
        restrict:'AE',
        scope:{person:'='}
    }

demoApp.directive 'myCustomer',->
    {template:'姓名:{{customer.name}} 地址:{{customer.address}}'}

demoApp.directive 'myCurrentTime', [
        '$interval', 'dateFilter', ($interval, dateFilter)->
            link = (scope, element, attrs) ->
                format = null
                updateTime = -> element.text dateFilter new Date(),format
                scope.$watch attrs.myCurrentTime, (value)->
                    format = value
                    updateTime()
                element.on '$destory',-> $interval.cancel timeoutId
                # start the ui update process; save the timeoutid for cancelling
                timeoutId = $interval( ->
                        updateTime()
                    ,1000)

            return {link:link}
    ]
demoApp.controller 'scopeCtrl',($scope) ->
    $scope.username = 'world'
    $scope.greet =  ->
        $scope.greeting  = 'hello '+$scope.username+'!'

demoApp.controller 'eventCtrl',($scope) ->
    $scope.count = 0
    $scope.$on 'MyEvent',-> $scope.count++
window.demoApp = demoApp
