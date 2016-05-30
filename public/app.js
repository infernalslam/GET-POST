angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var app = this
    app.test = 'GET_POST'
    app.add = function (input) {
      var data = {
        phone: input.phone,
        name: input.name
      }
      $http.post('/data', data).success(function (req, res) {
        console.log('success')
      })
    }
  })
