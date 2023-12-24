
function showAvailableStockInProductDetails() {
    function showAvailableStock() {
        var price_container_array = document.querySelectorAll("[data-zs-pricings][data-zs-variant-id]");
        for (var i = 0; i < price_container_array.length; i++) {
            var variants = window.zs_product.variants;
            var variant_id = price_container_array[i].getAttribute("data-zs-variant-id");
            var paragraph_elem = document.createElement("p");
            paragraph_elem.style = "font-size:14px;padding-left:20px;display:block;";
            for (var j = 0; j < variants.length; j++) {
                if (variants[j].variant_id == variant_id) {
                    /* Adding div for available stock */
                    if (variants[j].stock_available > 0) {
                        var text_elem = document.createTextNode("SKU: " + variants[j].sku + ", Stock Available : " + variants[j].stock_available);
                    } else {
                        var text_elem = document.createTextNode("SKU: " + variants[j].sku + ", Stock Unavailable: Will be backordered.");
                        paragraph_elem.style = "font-size:14px;padding-left:20px;display:block;color:red;font-weight:600;";
                    }
                    paragraph_elem.appendChild(text_elem);
                    price_container_array[i].appendChild(paragraph_elem);
                }
            }
        }
    }
    function productPageOnLoad() {
        if (window.zs_view == "product") {
            showAvailableStock();
        }
    }
    window.addEventListener("load", productPageOnLoad);
}
showAvailableStockInProductDetails();