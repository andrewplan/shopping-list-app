$(document).ready(function(){
    
    function getTotalCost () {
        var allItemCosts = document.getElementsByClassName("cost-output");
        var iter = 0;
        var totalCost = 0;
        var budgetLeft = 0;
        var budget = $( "#POST-budget" ).val();

        for (iter = 0; iter < allItemCosts.length; ++iter) {
                totalCost = totalCost + Number(allItemCosts[iter].innerHTML);
                budgetLeft = Number(budget - totalCost);
                console.log (totalCost);
                $("#total").text(totalCost);
                $("#money-left-output").text(budgetLeft);
        }
    };
    
    $( "#item-input" )
        .submit(function(event) {
            event.preventDefault();
            var itemValue = $( "#POST-item-value" ).val();
            var quantityValue = $( "#POST-quantity-value" ).val();
            var unitPriceValue = $( "#POST-unit-price-value" ).val();
            var costValue = quantityValue * unitPriceValue;
            $( ".shopping-list" ).append("<li class=shopping-items><input class=checkboxes type='checkbox'>" + "<span class=item-name-output>" + itemValue + "</span>" + "<span class=quantity-output>" + "(" + quantityValue + ")" + "</span>" + "<span class=cost-output>" + costValue + "</span>" + "<input class=delete type='button' value='delete'></li>").show();
            $( "#POST-item-value" ).val("");
            $( "#POST-quantity-value" ).val("");
            $( "#POST-unit-price-value" ).val("");
            getTotalCost();
    });
    
    $('ul').on('click', 'input.delete', function(event){
        // fires when any LIs are clicked on
        // including LIs that aren't on the page when it is initially loaded
        $( this ).parent().remove();
        getTotalCost();
    });
             
    $( "#budget-summary" ).submit(function(event){
        event.preventDefault();
        getTotalCost();
    });
        
    $(document).on('change', 'input:checkbox', function(){
        var input = $(this).siblings('span');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    });
});

