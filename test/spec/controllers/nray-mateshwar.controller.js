describe('TournamentController',function(){
     beforeEach(module('nRayTechnologyApp.tournament'));
     var $controller;
     beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
          $controller = _$controller_;
     }));
  describe('matchSchedule', function() {
    it('matchSchedule length should be 2', function() {
      var $scope = {};
      var controller = $controller('TournamentController',
       { $scope: $scope });  
      expect($scope.matchSchedule.length).toEqual(2);
    });
  });
});