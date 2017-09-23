$(document).ready(function () {
    $.get("/api/users", function(data){
        console.log(data)
    }) 
    var userTable = $("#user-table");
    userTable.empty()
    for (var i=0;i<userData.length;i++){
        
    }
});