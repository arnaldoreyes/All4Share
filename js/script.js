$(document).ready(function(){
    $('#search').on('submit', function(e){
        e.preventDefault();
        if ($("#correo").val()!='' &&  $("#correo").val()!=null) {
            location.href="https://www.google.com/search?q="+$('#correo').val();
        }
        else{
            $("#correo").addClass('is-invalid');
        }
    });
});