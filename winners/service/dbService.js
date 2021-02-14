angular.module('dbService',[])
.service('db',function($http){
this.getData=function(){
    return $http
    ({
        method:"get",
        url:"https://kuzmanovic112.github.io/pobjednici_sp/pobjednici.json"  
    })
}
})