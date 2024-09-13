import axios from "axios";

export const fetchCategories = async () => {
    try{
        const res = await axios.get('https://fakestoreapi.com/products');
        const products = res.data;

        const categories = new Set(products.map(product => product.category));

        return Array.from(categories);
    } catch (error){
        console.error("failed to fetch categories:", error);
        throw error;
    }
}