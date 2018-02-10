app.controller('testController', function($scope, $http) {

    $scope.skillList = [];
    $scope.showAdd = false;
    $scope.addSkills = {
        "id": "",
        "name": "",
        "status": null
    }

    var localData = localStorage.getItem('data');
    $scope.skillList.push(JSON.parse(localData))

    /*     $scope.addSkill = function() {

          $scope.addSkills.id = $scope.skillList.length + 1;
          $scope.skillList.push($scope.addSkills)
          localStorage.setItem('data', JSON.stringify($scope.addSkills))
          $scope.addSkills = {}
         }*/

    /*    $scope.changeSkill = function(obj) {
            var a = $scope.skillList.indexOf(obj);
            $scope.skillList[a] = {
                "id": obj.id,
                "name": obj.name,
                "status": obj.status
            }

            $scope.openEdit = false;
            localStorage.setItem('data', JSON.stringify(obj))

        }

        $scope.changeStatus = function(obj) {
            alert("Your skill is " + obj)
        }*/


    /***************************************************************************************

                Please refer below angular code for calling apis

    ***************************************************************************************/


    $scope.getSkills = function() {
        $http.get('/api/skills').then(function(res) {
            $scope.skillList = res.data;
        });
    }



    //Add 
    $scope.addSkill = function() {
        $http.post('/api/skills', {
                name: $scope.addSkills.name,
                status: $scope.addSkills.status
            })
            .then(function(res) {
                $scope.addSkills = {}
                $scope.getSkills();
                alert('Skill added successfully!');
            });
    }

    // Edit

    $scope.changeSkill = function(index) {
        var id = index.id;
        $http
            .put('/api/skills/' + id + '/update', {
                name: index.name
            })
            .then(function(res) {
                $scope.openEdit = false;
                $scope.getSkills();
                alert('Skill updated Successfully');
            });
    }


    //Change Statuys

    $scope.changeStatus = function(status, index) {
        var id = $scope.skillList[index].id;
        $http
            .put('/api/skills/' + id + '/approve', {
                status: status
            })
            .then(function(res) {
                alert('This skill is ' + (status === 1 ? 'Approved' : 'Rejected'));
            });
    }
    $scope.data = {};
    $scope.searchBuyers = function() {
        $http
            .get('/api/skills?searchText=' + $scope.data.searchSkill)
            .then(function(res) {
                console.log(res);
                $scope.skillList = res.data;
            });
    }
})