angular.module('scheduleCity').controller('MainCtrl',function($scope,$firebase){	
 var ref = new window.Firebase("https://blinding-heat-4724.firebaseio.com/days");  
  var fb = $firebase(ref);
   $scope.reset = function() {    

    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:10am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:10am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });    

  };
  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'days');

});