angular.module('mainController',[])
.controller('mainCtrl',function($scope,db){
    $scope.winners1=[];
    $scope.activeWinners={};
    db.getData().then(function(result){
    $scope.winners1=result.data;
    // console.log(result.data);
        },function(error){
    console.log(error)
        })
        $scope.display=function(win){
            $scope.activeWinners=win;
        }
        
})





