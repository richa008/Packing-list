import React from 'react';
import { PackingListCategoryItem } from "./packing-list.interface";

export const fetchPackingListData = (): PackingListCategoryItem[] => {
    const basicsCategory: PackingListCategoryItem = {
            key: "basics",
            categoryName: "Essentials",
            packingListItems: [
                {
                    key: "wallet",
                    itemName: "Wallet (Cash + credit cards)",
                    isSelected: false
                },
                {
                    key: "idcard",
                    itemName: "ID card",
                    isSelected: false
                },
                {
                    key: "keys",
                    itemName: "Keys",
                    isSelected: false
                },
                {
                    key: "phone",
                    itemName: "Phone + charger",
                    isSelected: false
                },
                {
                    key: "laptop",
                    itemName: "Laptop + charger",
                    isSelected: false
                },
                {
                    key: "headphones",
                    itemName: "Airpods/ Headphones",
                    isSelected: false
                },
                {
                    key: "snacks",
                    itemName: "Snacks",
                    isSelected: false
                },
                {
                    key: "water",
                    itemName: "Water bottle",
                    isSelected: false
                },
                {
                    key: "sunglasses",
                    itemName: "Sunglasses",
                    isSelected: false
                },
            ]
        }

        const apparel: PackingListCategoryItem = {
            key: "apparel",
            categoryName: "Clothes and shoes",
            packingListItems: [
                {
                    key: "innerwear",
                    itemName: "Innerwear",
                    isSelected: false
                },
                {
                    key: "outerwear",
                    itemName: "Outerwear/ Jacket/ Sweater",
                    isSelected: false
                },
                {
                    key: "bottoms",
                    itemName: "Jeans/ Pants/ Shorts/ Skirts",
                    isSelected: false
                },
                {
                    key: "formals",
                    itemName: "Formals/ Dresses",
                    isSelected: false
                },
                {
                    key: "tops",
                    itemName: "Tops/shirts",
                    isSelected: false
                },
                {
                    key: "sleepwear",
                    itemName: "Sleepwear",
                    isSelected: false
                },
                {
                    key: "altheticwear",
                    itemName: "Athletic wear",
                    isSelected: false
                },
                {
                    key: "shoes",
                    itemName: "Shoes + socks",
                    isSelected: false
                },
                {
                    key: "sandals",
                    itemName: "Sandals/ flip flops",
                    isSelected: false
                },
            ]
        }

        const personalCare: PackingListCategoryItem = {
            key: "personalCare",
            categoryName: "Personal Care",
            packingListItems: [
                {
                    key: "shampoo",
                    itemName: "Shampoo + conditioner",
                    isSelected: false
                },
                {
                    key: "soap",
                    itemName: "Body wash",
                    isSelected: false
                },
                {
                    key: "toothpaste",
                    itemName: "Tooth paste + tooth brush",
                    isSelected: false
                },
                {
                    key: "razor",
                    itemName: "Razor",
                    isSelected: false
                },
                {
                    key: "lotion",
                    itemName: "Body lotion",
                    isSelected: false
                },
                {
                    key: "hairgel",
                    itemName: "Hair gel/ hair cream",
                    isSelected: false
                },
                {
                    key: "sunscreen",
                    itemName: "Sunscreen",
                    isSelected: false
                },
                {
                    key: "contacts",
                    itemName: "Contact lenses + contact lens solution",
                    isSelected: false
                },
            ]
        }

        const baby: PackingListCategoryItem = {
            key: "baby",
            categoryName: "Baby/Kids",
            packingListItems: [
                {
                    key: "clothes",
                    itemName: "Baby clothes",
                    isSelected: false
                },
                {
                    key: "monitor",
                    itemName: "Body monitor + charger",
                    isSelected: false
                },
                {
                    key: "toys",
                    itemName: "Toys + books",
                    isSelected: false
                },
                {
                    key: "diapers",
                    itemName: "Diapers + wet wipes",
                    isSelected: false
                },
                {
                    key: "personalCare",
                    itemName: "Baby Soap + Cream",
                    isSelected: false
                },
                {
                    key: "food",
                    itemName: "Baby food + utensils",
                    isSelected: false
                },
                {
                    key: "medicines",
                    itemName: "Medicines",
                    isSelected: false
                },
                {
                    key: "first aid",
                    itemName: "First aid kit",
                    isSelected: false
                },
            ]
        }

    const list = [
        basicsCategory,
        apparel,
        personalCare,
        baby
    ]

    return list;
}