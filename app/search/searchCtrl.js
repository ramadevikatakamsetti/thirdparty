(function(){
    function searchCtrlFn($scope,searchSvc){
        $scope.state="";
        $scope.country="";
        $scope.visible=false;
        
        $scope.data=function(){
            $scope.visible=true;
           var country=$scope.country;
            var state=$scope.state;
            console.log(country);
            console.log(state);
           searchSvc.getWeatherDetails($scope.country, $scope.state)
            .then(function(res){
                 $scope.searchData=res.data.query.results.channel;
               console.log($scope.searchData);
            })
               .catch(function(error){
                $scope.error=true;
            })
        }       
    }
    
    
    angular.module("search").controller("searchCtrl",["$scope","searchSvc",searchCtrlFn]);
})();

