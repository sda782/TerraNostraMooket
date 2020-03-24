$(document).ready(function() {

    console.log("site loaded");
    // Getting shop info from Json file
    $.getJSON("https://raw.githubusercontent.com/sda782/TerraNostraMooket/master/shop_index.json", function(shopindex) {
        //console.log(shopindex);
        $.each(shopindex, function(i, shop) {

            var stock = "";
            $.each(shop.inventory, function(j, inv) {
                console.log(inv.name);
                stock = stock + inv.amount + ' ' + inv.name + ' for ' + inv.price + '<br>';
            });
            $('#market').append('<div class="shop"><h2 id="shopname">' + shop.name + '</h2><h5 id="owner">' + shop.owners + '</h5><div class="stock">' + stock + '</div></div>');
        });
    });
});