"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for (var i = 0; i < item.length; i+++) {
    cartHTML += "<tr><td><img src='tc_item" + "item[i]" +".png' alt='" + "item[i]" + "</td>";
    cartHTML += "<td>" + itemDescription + "</td> <td>$" + itemPrice + "</td> <td>" + itemQty + "</td>";
    var itemCost = itemPrice * itemQty;
    cashHTML += "<td>$" + "itemCost" + "</td></tr>";
    orderTotal += "itemCost";
}