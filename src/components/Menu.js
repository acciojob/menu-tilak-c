import React,{useState} from 'react'
import '../styles/Menu.css'
const breakfastItems=[
    {
        "name":"Buttermilk pancakes",
        "image":"https://natashaskitchen.com/wp-content/uploads/2022/05/Buttermilk-Pancakes-SQ.jpg",
        "price":15.99,
        "description":"Classic Buttermilk Pancakes made completely from scratch! This pancake recipe yields thick, fluffy pancakes ready in under 15 minutes!"
    },
    {
        "name":"Egg Attack",
        "image":"https://images-cdn.ubuy.co.in/66823e980071b042f663e985-marvel-mini-egg-attack-deadpool-action.jpg",
        "price":12.99,
        "description":"A place in Bangalore which serves Surat-style good streetfood egg items. "
    },{
        "name":"Oreo dream",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrAadLBcpCxgtmn_LHfsrmzIOYMnDIN_xYw&s",
        "price":20.99,
        "description":"This easy No Bake Oreo Dessert is an irresistible mix of whipped cream, chocolate pudding, Oreo cookies, and a rich cream cheese filling all stacked on an Oreo"
    },
]

const lunchItems = [
  {
    name: "Grilled Chicken Sandwich",
    image: "https://www.seriouseats.com/thmb/vqk9qQq7SuU1QzRKHZ6hczk0M9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220615-grilled-chicken-sandwich-vicky-wasik-19-8a6378a3a3ba4f9f98e81c3b19b8ddf9.jpg",
    price: 18.49,
    description: "Juicy grilled chicken breast with lettuce, tomato, and house sauce on a toasted bun."
  },
  {
    name: "Veggie Wrap",
    image: "https://www.acouplecooks.com/wp-content/uploads/2022/02/Veggie-Wraps-008.jpg",
    price: 10.99,
    description: "Loaded with fresh veggies, hummus, and a light dressing in a soft tortilla wrap."
  },
  {
    name: "Pasta Primavera",
    image: "https://www.cookingclassy.com/wp-content/uploads/2019/09/pasta-primavera-2.jpg",
    price: 16.75,
    description: "Penne pasta tossed with colorful seasonal vegetables in a light garlic sauce."
  }
]

const dinnerItems = [
  {
    name: "Steak and Mashed Potatoes",
    image: "https://www.simplyrecipes.com/thmb/qy9IYr4DG_k4H-N24T02A6u7o6I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Steak-Mashed-Potatoes-LEAD-05-ef028416762b41bfb3e16aaf8d2ad6ec.jpg",
    price: 25.99,
    description: "Tender grilled steak served with creamy mashed potatoes and garlic butter."
  },
  {
    name: "Salmon with Veggies",
    image: "https://www.wellplated.com/wp-content/uploads/2020/04/Baked-Salmon-and-Vegetables.jpg",
    price: 22.49,
    description: "Baked salmon fillet with roasted vegetables and lemon herb sauce."
  },
  {
    name: "Paneer Butter Masala",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala-recipe.jpg",
    price: 17.99,
    description: "Soft paneer cubes simmered in a rich and creamy tomato-based gravy."
  }
]


const Menu = () => {
    const [selectedMeal,setSelectedMeal]=useState("breakfast");
    const getItems=()=>{
        if(selectedMeal==="breakfast") return breakfastItems;
        if(selectedMeal==="lunch") return lunchItems;
        if(selectedMeal==="dinner") return dinnerItems;
    }
    const items=getItems();
  return (
    <div>
        <div className="buttons">
            <button id="filter-btn-1" onClick={()=> setSelectedMeal("breakfast")}>Breakfast</button>
            <button id="filter-btn-2" onClick={()=> setSelectedMeal("lunch")}>Lunch</button>
            <button id="filter-btn-3" onClick={()=> setSelectedMeal("dinner")}>Dinner</button>
        </div>
        {items.map((item,index)=>(
        <div className="container" key={index} data-test-id={`menu-item-${selectedMeal}`} >
        <img width="100px" height="100px" src={item.image} alt={item.name}/>
        <div className="content">
             <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    </div>  ))}
    </div>
    
  )
}

export default Menu