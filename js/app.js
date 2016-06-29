$(document).ready(function(){
    
    
    
    /*--var arr = [1,2,3,4];
var total=0;
for(var i in arr) { total += arr[i]; } */
    
    function getTotalCost () {
                var allItemCosts; 
                allItemCosts = $(".cost-output").text()/*document.getElementsByClassName("cost-output")*/;
                var iter = 0;
                var totalCost = 0;
                for (iter = 0; iter < allItemCosts.length; ++iter) {
                        totalCost = totalCost + allItemCosts[iter].innerHTML; 
                        console.log (totalCost);
                        $(".subtotal").append(totalCost);
                    }
                };
    
    $( "form" )
        .submit(function(event) {
            event.preventDefault();
            var itemValue = $( ".item-value" ).val();
            var quantityValue = $( ".quantity-value" ).val();
            var unitPriceValue = $( ".unit-price-value" ).val();
            var costValue = quantityValue * unitPriceValue;
            $( ".shopping-list" ).append("<li class=shopping-items><input class=delete type='button' value='delete'><input class=checkboxes type='checkbox'>" + itemValue + "<span>" + "(" + quantityValue + ")" + "</span>" + "<span class=cost-output>" + costValue + "</span>" + "</li>").show();
            $( ".item-value" ).val("");
            $( ".quantity-value" ).val("");
            $( ".unit-price-value" ).val("");
            getTotalCost;
        });
    
    $('ul').on('click', 'input.delete', function(event){
        // fires when any LIs are clicked on
        // including LIs that aren't on the page when it is initially loaded
        $( this ).parent().remove();
        });
             
        
});

