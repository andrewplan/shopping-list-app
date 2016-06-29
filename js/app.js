$(document).ready(function(){
    $( "form" )
        .submit(function(event) {
            event.preventDefault();
            var itemValue = $( ".item-value" ).val();
            $( ".shopping-items" ).append("<li><input class=delete type='button' value='delete'><input class=checkboxes type='checkbox'>" + itemValue + "</li>").show();
            $(".item-value").val("");
        });
    
    $('ul').on('click', 'input.delete', function(event){
        // fires when any LIs are clicked on
        // including LIs that aren't on the page when it is initially loaded
        $( this ).parent().remove();
        });
        
});

