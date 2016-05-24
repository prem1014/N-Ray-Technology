describe('ContactUsController',function(){
	beforeEach(module('nRayTechnologyApp.contactUs'));

	var $controller,
	    controller,
	    $scope={};

	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;

		controller=$controller('ContactUsCtrl',{$scope:$scope});
	}));

    it('should have scope defined',function(){
        expect($scope).toBeDefined();
    })

	describe('datePicker',function(){

	})
})