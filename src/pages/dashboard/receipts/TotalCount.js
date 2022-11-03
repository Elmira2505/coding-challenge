import React from 'react';
import {receipts} from "./Receipts";

// total money made
export const totalRevenue = receipts.reduce((a, c) => +c.Total.slice(1) + a, 0);
//total items sold
export const totalItems = receipts.map((el, i) => el.Items[0].Quantity)
                                  .flat()
                                  .reduce((a, c) => +c + a, 0);
//total customers
export const customerCount = receipts.map((el) => el.CustomerId)
export const totalCustomers = customerCount.filter((el, i) => customerCount.indexOf(el) === i).length;

//most popular item
 const mostPopularItem = () =>{
    const items = receipts.map((el, i) => el.Items.map((el) => el.Item)).flat();
    let arr2 = {};
    let arr3 = {};
	for (let i = 0; i < items.length; i++) {
        if (arr2[items[i]]) {
            arr2[items[i]] += 1;
        } else {
            arr2[items[i]] = 1;
        }
    }
    let forSort = [];
    for (let item in arr2) forSort.push([item, arr2[item]]);
    forSort.sort(function (a, b) {
        return b[1] - a[1];
    });
    for (let z = 0; z < forSort.length; z++) {
        arr3[forSort[z][0]] = forSort[z][1];
    }
    let arr4 = Object.entries(arr3);
    return  arr4[0][0]
}
export const mostPopular = mostPopularItem();

 //total items of one customer
 const totalItemsOfCustomer = receipts.map((el, i) => el.Items[0].Quantity);







