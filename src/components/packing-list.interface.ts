import React from 'react';

export interface PackingListCategoryItem {
    key: string;
    categoryName: string;
    packingListItems: PackingListItem[];
}

export interface PackingListItem {
    key: string;
    itemName: string;
    isSelected: boolean;
}