var itemValue;
var unitPriceValue;
var quantityValue;
var costValue;

var itemValueArray = [];
var unitPriceValueArray = [];
var quantityValueArray = [];
var costValueArray = [];

$(document).ready(function(){

     $( "input.item-input" )
        .keyup(function(event) {
        itemValue = $( this ).val();
        itemValueArray.push(itemValue);
        console.log(itemValue);
      })
        .keyup();

    $( "input.unit-price-input" )
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
         if ( event.keyCode == 13 ) {
            $( ".shopping-items" ).append( "<li>" + itemValue + unitPriceValue + quantityValue + costValue + "</li>" );
             console.log(itemValue, unitPriceValue, quantityValue, costValue);
             $("input").val("");
            };
      })    
         .keyup();
    
    $(".total").children().first().append(function() {
        var sum = 0;
        $.each(costValueArray,function(){sum+=parseFloat(this) || 0;});
        console.log(sum);
    });

        $('ul').on('click', 'li:not(.column-names, .inputs)', function(event){
        // fires when any LIs are clicked on
        // including LIs that aren't on the page when it is initially loaded
        alert("you clicked an li!");
        });
});

