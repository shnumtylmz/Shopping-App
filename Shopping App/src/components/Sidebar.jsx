import '../styles/sidebar.css'
import { fetchCategories } from "../services/fetchCategories";
import { useEffect, useState } from "react";


const CategorySidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try{
                const categories = await fetchCategories();
                setCategories(categories);
            }catch(error){
                console.error("Failed to fetch categories:", error);
            }
        };
        getCategories();
    }, []);


    return (
        <div className="category-sidebar">
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href={`?category=${category}`}>{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategorySidebar;