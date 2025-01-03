import React from "react";
/**
 * Represents a subcategory with its details.
 */
export interface SubcategoryType {
  /**
   * The name of the subcategory.
   */
  name: string;
  /**
   * The category of the subcategory.
   */
  category: "jasa" | "produk" | "sewa-gedung" | "sewa-lahan";
  /**
   * The icon of the subcategory.
   */
  icon: React.JSX.Element;
}

/**
 * Represents an item with its details.
 */
export interface Items {
  /**
   * the source of the image.
   * @example "https://picsum.photos/seed/salep-luka-herbal/512/512"
   */
  src: string;
  /**
   * the alt text of the image.
   */
  alt: string;
  /**
   * the price of the item.
   */
  price: number;
  /**
   * the name of the item.
   */
  name: string;
}
