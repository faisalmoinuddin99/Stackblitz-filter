export class Crop {
    name: string;
    // checked: boolean;
    district: string
    subCategory: Subcategory[];
}

export class Subcategory {
    id: number;
    name: string;
    // checked: boolean;
}

export class CropFilter {
    name: string
    checked: boolean
}

export class DistrictFilter {
    name: string
    checked: boolean
}
