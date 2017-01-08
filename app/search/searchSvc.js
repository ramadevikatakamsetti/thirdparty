(function(){
    function searchSvc($q,$http){
        
        this.getWeatherDetails= function(country,state){
            var dfd=$q.defer();
          //   var weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + country + '%2C%20' + state + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

                 var weatherApi='https://api.github.com/users/hadley/orgs';
            $http.get(weatherApi)
                .then(function(response){
                      dfd.resolve(response);
                      }).catch(function(response){
                        dfd.reject(response);
                         })
            return dfd.promise;
        }
        
    }
    
    angular.module("search").service("searchSvc",["$q","$http",searchSvc]);
})();



