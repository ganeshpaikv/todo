$(document).ready(function(){

    var checkboxes = $('content input:checkbox').length;
    console.log(checkboxes);
    checkboxes.change(function(){
        var countCheckedCheckboxes = checkboxes.filter(':checked').length;
        console.log(countCheckedCheckboxes);
    });

});

