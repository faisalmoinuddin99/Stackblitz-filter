import { Crop } from "./crop.model";

export const CROPS: Crop[] = [
    {
        name: "Rice",
        // checked: true,
        district: "Thane",
        subCategory: [
            {
                id: 1,
                name: "Basmati",
                // checked: true
            },
            {
                id: 2,
                name: "Ammamore",
                // checked: true
            }
        ]
    },
    {
        name: "Rice",
        // checked: true,
        district: "Nashik",
        subCategory: [
            {
                id: 1,
                name: "Basmati",
                // checked: true
            },
            {
                id: 2,
                name: "Ammamore",
                // checked: true
            }
        ]
    },
    {
        name: "Wheat",
        // checked: true,
        district: "Nashik",
        subCategory: [
            {
                id: 1,
                name: "Durum",
                // checked: true
            },
            {
                id: 2,
                name: "Emmer",
                // checked: true
            }
        ]
    },
    {
        name: "Barley",
        // checked: true,
        district: "Ratnagiri",
        subCategory: [
            {
                id: 1,
                name: "Hulless Barley",
                // checked: true
            },
            {
                id: 2,
                name: "Barley Flakes",
                // checked: true
            }
        ]
    },
    {
        name: "Barley",
        // checked: true,
        district: "Thane",
        subCategory: [
            {
                id: 1,
                name: "Hulless Barley",
                // checked: true
            },
            {
                id: 2,
                name: "Barley Flakes",
                // checked: true
            }
        ]
    }
];
