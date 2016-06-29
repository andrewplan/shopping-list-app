var itemValue;
var unitPriceValue;
var quantityValue;
var costValue;

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

   /* $( "input.unit-price-input" )
        .keyup(function() {
        unitPriceValue = $( this ).val();
        unitPriceValueArray.push(unitPriceValue);
        console.log(unitPriceValue);
      })
        .keyup();

    $( "input.quantity-input" )
        .keyup(function() {
        quantityValue = $( this ).val();
        quantityValueArray.push(quantityValue);
        console.log(quantityValue);
      })
        .keyup();

     $( "input.cost-input" )
        .keyup(function() {
         costValue = $( this ).val();
         costValueArray.push(costValue);
         console.log(costValue);
      })    
         .keyup(); 
         
    $(".subtotal").append(function() {
        var total = 0;
        for (var i = 0; i < costValueArray.length; i++) {
            total += costValueArray[i] << 0;
            console.log(total);
        }
    });*/
    

        
});

