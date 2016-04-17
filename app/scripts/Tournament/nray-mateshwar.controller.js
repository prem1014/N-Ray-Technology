'use strict';
(function(){
	angular.module('nRayTechnologyApp.tournament',[])
	.controller('TournamentController',tournamentController);
	tournamentController.$inject=['$scope'];
	function tournamentController($scope){
		$scope.matchSchedule=[{match:1,team1:'फैजुल्लाहपुर',team2:'राजापुर',dateOfmatch:'15-04-2016',result:'फैजुल्लाहपुर नौ विकेट से जीता'},
		  {match:2,team1:'करसघाट',team2:'महरानी',dateOfmatch:'15-04-2016',result:'महरानी आठ विकेट से जीता'}
		];
	}

})();