import React from 'react';
import {receipts} from "./Receipts";


export const totalRevenue = receipts.items.reduce((a, c) => +c.ItemPrice.slice(1) * +c.Quantity + a, 0);


