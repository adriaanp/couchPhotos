'use strict';

/* Controllers */

angular.module('photos.controllers', []).
  controller('MainCtrl', function($scope, $resource) {
        var q = $resource("/photos/_design/photos/_view/list?include_docs=true");
        var r = $resource("/photos/:id");

        function refresh() {
            var docs = q.get(function() {
                $scope.photos = docs.rows;
            });
        };

        $scope.save = function() {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                
                var attachment = {};
                attachment[$scope.photo.file.name] = {
                    data: e.target.result.substring(e.target.result.indexOf(',') + 1),
                    'content-type': $scope.photo.file.type
                };

                var data = {name: $scope.photo.name, description: $scope.photo.description, _attachments: attachment }
                //$scope.data = data;
                r.save(data, function() { 
                    delete $scope.photo;
                    refresh(); 
                });
            };
                
            fileReader.readAsDataURL($scope.photo.file);
        };

        $scope.delete = function(photo) {

            r.delete({id: photo._id, rev: photo._rev}, function() {
                refresh();
            });
        };

        refresh();
  });