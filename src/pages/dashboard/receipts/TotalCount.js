import React from 'react';
import {receipts} from "./Receipts";


export const totalRevenue = receipts.reduce((a, c) => +c.Total.slice(1) + a, 0);

export const totalItems = receipts.map((el, i) => el.Items[0].Quantity)
                                  .reduce((a, c) => +c + a, 0);





