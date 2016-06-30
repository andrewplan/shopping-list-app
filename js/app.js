$(document).ready(function(){
    
    function getTotalCost () {
        var allItemCosts = document.getElementsByClassName("cost-output");
        var iter = 0;
        var totalCost = 0;
        var budgetLeft = 0;
        var budget;

        for (iter = 0; iter < allItemCosts.length; ++iter) {
                totalCost = totalCost + Number(allItemCosts[iter].innerHTML);
                if ($( "#POST-budget" ).val() == "") {
                    budget = 0
                    }
                else {
                    budget = parseFloat($( "#POST-budget" ).val());
                    }
                budgetLeft = Number(budget - totalCost);
                console.log (totalCost);
                $("#total").text(totalCost.toFixed(2));
                $("#money-left-output").text(budgetLeft.toFixed(2));
        }
    };
    
    $("#budget-summary").submit(function(event){
        event.preventDefault();
        getTotalCost();
    });
    
    $("#item-input").submit(function(event) {
            event.preventDefault();
            var itemValue = $( "#POST-item-value" ).val();
            var quantityValue = $( "#POST-quantity-value" ).val();
            var unitPriceValue = $( "#POST-unit-price-value" ).val();
            var costValue = quantityValue * unitPriceValue;
        
            if(quantityValue.match(/^(?:\d*\.\d{1,2}|\d+)$/) && unitPriceValue.match(/^(?:\d*\.\d{1,2}|\d+)$/)) {
                $( ".shopping-list" ).append("<li class=shopping-items><input class=checkboxes type='checkbox'>" + "<span class=item-name-output>" + itemValue + "</span>" + "<span class=quantity-output>" + "(" + quantityValue + ")" + "</span>" + "<span class=cost-output>" + Math.round(costValue).toFixed(2) + "</span>" + "<input class=delete type='button' value='delete'></li>").show();
                $( "#POST-item-value" ).val("");
                $( "#POST-quantity-value" ).val("");
                $( "#POST-unit-price-value" ).val("");
                getTotalCost();
            }
            else {
                alert("You must enter a valid quantity and unit price!");
            }
    });
    
    $('ul').on('click', 'input.delete', function(event){
        $( this ).parent().remove();
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

