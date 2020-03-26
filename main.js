$(document).ready(function () {

    console.log("site loaded");
    // Getting shop info from Json file
    $.getJSON("https://raw.githubusercontent.com/sda782/TerraNostraMooket/master/shop_index.json", function (shopindex) {
        $.each(shopindex, function (i, shop) {

            var stock = "";
            $.each(shop.inventory, function (j, inv) {
                stock = '<p>' + stock + inv.amount + ' ' + inv.name + ' for ' + inv.price + '</p>';
            });
            $('#market').append('<div class="shop"><h2 id="shopname">' + shop.name + '</h2><h5 id="owner">' + shop.owners + '</h5><button onclick="seeStock(this)">Show stock</button><div class="stock">' + stock + '</div></div>');
        });
    });

});

function seeStock(stockID) {
    $(stockID).parent().children('.stock').toggle();
}