$(document).ready(function () {
    
    $(".column-names").hide();
    
    function getTotalCost() {
        var allItemCosts = document.getElementsByClassName("cost-output");
        var iter = 0;
        var totalCost = 0;
        var budgetLeft = 0;
        var budget;
        
        if ($( "#budget" ).val() == "") {
            budget = 0
        }
        else {
            budget = parseFloat($( "#budget" ).val());
        }
        
        if (allItemCosts.length === 0) {
            console.log (totalCost);
            $("#total").text("0.00");
            $("#money-left-output").text(budget.toFixed(2));
        }
        else {
            for (iter = 0; iter < allItemCosts.length; ++iter) {
                    totalCost = totalCost + Number(allItemCosts[iter].innerHTML);
                    budgetLeft = Number(budget - totalCost);
                    console.log (totalCost);
                 $("#total").text(totalCost.toFixed(2));
                    $("#money-left-output").text(budgetLeft.toFixed(2));
            }
        }
    }
    
    $("#budget-summary").submit(function() {
        event.preventDefault();
        getTotalCost();
    });
    
    $("#item-input").submit(function() {
        event.preventDefault();
        var itemValue = $( "#item-value" ).val();
        var quantityValue = $( "#quantity-value" ).val();
        var unitPriceValue = $( "#unit-price-value" ).val();
        var costValue = quantityValue * unitPriceValue;
        
        $(".column-names").show();
        if(quantityValue.match(/^(?:\d*\.\d{1,2}|\d+)$/) && unitPriceValue.match(/^(?:\d*\.\d{1,2}|\d+)$/)) {
            $( ".shopping-list" ).append("<li class='shopping-items'><input class=checkboxes type='checkbox'>" + "<span class='item-name-output'>" + itemValue + "</span>" + "<span class='quantity-output'>" + "(" + quantityValue + ")" + "</span>" + "<span class='cost-output'>" + Math.round(costValue).toFixed(2) + "</span>" + "<input class=delete type='button' value='delete'></li>").show();
            $( "#item-value" ).val("");
            $( "#quantity-value" ).val("");
            $( "#unit-price-value" ).val("");
            getTotalCost();
        }
        else {
            alert("You must enter a valid quantity and unit price!");
        }
    });
    
    $('ul').on('click', 'input.delete', function(event){
        if( $(".shopping-list").children().length === 1 ) {
            $(".column-names").hide();
        }
        else {
            $(".column-names").show();
        }
        
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

