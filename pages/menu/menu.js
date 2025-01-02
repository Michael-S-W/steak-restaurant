
const steakDishes = [  
    {  
        id: 1,  
        name: "Grilled Ribeye Steak",  
        ingredients: ["Ribeye steak", "Olive oil", "Garlic", "Rosemary", "Salt", "Pepper"],  
        price: 29.99,  
        image: "https://www.seriouseats.com/thmb/tTykw_Tpvh4Ky5w9AlpfsT4ugvc=/1500x0/filters:no_upscale/5991a6fbd5824f2bb538b195205340b9.jpg",  
        sideDish: { name: "Garlic Mashed Potatoes" },  
        drink: { name: "Red Wine" }  
    },  
    {  
        id: 2,  
        name: "Filet Mignon",  
        ingredients: ["Filet mignon", "Butter", "Thyme", "Salt", "Pepper"],  
        price: 34.99,  
        image: "https://www.loveandlemons.com/wp-content/uploads/2020/01/filet-mignon-recipe.jpg",  
        sideDish: { name: "Grilled Asparagus" },  
        drink: { name: "Champagne" }  
    },  
    {  
        id: 3,  
        name: "New York Strip Steak",  
        ingredients: ["New York strip steak", "Olive oil", "Garlic powder", "Onion powder", "Salt", "Pepper"],  
        price: 27.99,  
        image: "https://www.certifiedangusbeef.com/photographs/catalog/original/strip_steak_on_plate_111006.jpg",  
        sideDish: { name: "French Fries" },  
        drink: { name: "Craft Beer" }  
    },  
    {  
        id: 4,  
        name: "T-bone Steak",  
        ingredients: ["T-bone steak", "Marinade (soy sauce, garlic, ginger)", "Salt", "Pepper"],  
        price: 31.99,  
        image: "https://www.certifiedangusbeef.com/photographs/catalog/original/T-bone_steak_on_plate_1469407.jpg",  
        sideDish: { name: "Baked Potatoes" },  
        drink: { name: "Bourbon" }  
    },  
    {  
        id: 5,  
        name: "Sirloin Steak",  
        ingredients: ["Sirloin steak", "Olive oil", "Paprika", "Garlic", "Salt", "Pepper"],  
        price: 24.99,  
        image: "https://www.thespruceeats.com/thmb/_6OvtaRi8t1FkFOaltvSIdFTEVk=/1500x0/filters:no_upscale/creamy-peppercorn-sauce-5b98d32146e0fb0037f8a2e1.jpg",  
        sideDish: { name: "Caesar Salad" },  
        drink: { name: "Coke" }  
    },  
    {  
        id: 6,  
        name: "Skirt Steak Tacos",  
        ingredients: ["Skirt steak", "Tortillas", "Cilantro", "Onion", "Lime", "Salt"],  
        price: 16.99,  
        image: "https://www.recipeteacher.com/wp-content/uploads/2021/02/skirt-steak-tacos-recipe-3.jpg",  
        sideDish: { name: "Mexican Rice" },  
        drink: { name: "Margarita" }  
    },  
    {  
        id: 7,  
        name: "Steak Frites",  
        ingredients: ["Steak", "French fries", "Garlic butter", "Parsley", "Salt"],  
        price: 22.99,  
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Steak_Frites_plat_principal.jpg",  
        sideDish: { name: "Garlic Bread" },  
        drink: { name: "Pilsner" }  
    },  
    {  
        id: 8,  
        name: "Beef Wellington",  
        ingredients: ["Beef tenderloin", "Puff pastry", "Mushrooms", "Prosciutto", "Egg wash"],  
        price: 49.99,  
        image: "https://www.gordonramsay.com/assets/recipes/beef-wellington-1579-mw-p1.jpg",  
        sideDish: { name: "Roasted Vegetables" },  
        drink: { name: "Merlot" }  
    },  
    {  
        id: 9,  
        name: "Peppercorn Steak",  
        ingredients: ["Steak", "Peppercorns", "Cream", "Brandy", "Butter"],  
        price: 28.99,  
        image: "https://www.chilipeppermadness.com/wp-content/uploads/2021/01/Peppercorn-Steak-Recipe-1.jpg",  
        sideDish: { name: "Sweet Potato Fries" },  
        drink: { name: "Spicy Sangria" }  
    },  
    {  
        id: 10,  
        name: "Chateaubriand",  
        ingredients: ["Chateaubriand steak", "Butter", "Garlic", "Cognac", "Herbs"],  
        price: 54.99,  
        image: "https://images.unsplash.com/photo-1590976892548-3e20b0d3f0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",  
        sideDish: { name: "Truffle Mashed Potatoes" },  
        drink: { name: "Cabernet Sauvignon" }  
    },  
    {  
        id: 11,  
        name: "Steak Salad",  
        ingredients: ["Steak", "Mixed greens", "Tomatoes", "Cucumbers", "Vinaigrette"],  
        price: 19.99,  
        image: "https://www.tasteofhome.com/wp-content/uploads/2021/12/steak-salad-exps-htx18-41084-b-11_07_1b-1.jpg",  
        sideDish: { name: "Garlic Parmesan Croutons" },  
        drink: { name: "Iced Tea" }  
    },  
    {  
        id: 12,  
        name: "Cajun Steak",  
        ingredients: ["Steak", "Cajun seasoning", "Butter", "Bell pepper", "Onion"],  
        price: 26.99,  
        image: "https://tasteofartisan.com/wp-content/uploads/2022/06/cajun-steak-1.png",  
        sideDish: { name: "Corn on the Cob" },  
        drink: { name: "Sweet Tea" }  
    },  
    {  
        id: 13,  
        name: "Steak with Chimichurri Sauce",  
        ingredients: ["Steak", "Parsley", "Garlic", "Red pepper flakes", "Vinegar", "Olive oil"],  
        price: 28.99,  
        image: "https://www.savorynothings.com/wp-content/uploads/2021/01/steak-with-chimichurri-hero-5.jpg",  
        sideDish: { name: "Potato Wedges" },  
        drink: { name: "Malbec" }  
    },  
    {  
        id: 14,  
        name: "Salisbury Steak",  
        ingredients: ["Ground beef", "Onion", "Bread crumbs", "Egg", "Gravy"],  
        price: 18.99,  
        image: "https://www.countryliving.com/food-drinks/recipes/a42630/comfort-food-salisbury-steak-recipes/",  
        sideDish: { name: "Steamed Broccoli" },  
        drink: { name: "Moscow Mule" }  
    },  
    {  
        id: 15,  
        name: "Beef Stroganoff",  
        ingredients: ["Beef", "Mushrooms", "Noodles", "Sour cream", "Beef broth"],  
        price: 20.99,  
        image: "https://images.unsplash.com/photo-1629705165053-e4c42359a329",  
        sideDish: { name: "Green Beans" },  
        drink: { name: "Shandy" }  
    },  
    {  
        id: 16,  
        name: "Skirt Steak with Avocado Salsa",  
        ingredients: ["Skirt steak", "Avocado", "Tomato", "Lime", "Cilantro"],  
        price: 25.99,  
        image: "https://images.unsplash.com/photo-1604098706878-011fb12b7327",  
        sideDish: { name: "Quinoa Salad" },  
        drink: { name: "Lemonade" }  
    },  
    {  
        id: 17,  
        name: "Beef and Broccoli Stir Fry",  
        ingredients: ["Beef", "Broccoli", "Soy sauce", "Garlic", "Ginger"],  
        price: 19.99,  
        image: "https://www.iamafoodblog.com/wp-content/uploads/2020/02/beef-broccoli-stir-fry-4-2.jpg",  
        sideDish: { name: "Fried Rice" },  
        drink: { name: "Asian Pear Cocktail" }  
    },  
    {  
        id: 18,  
        name: "Korean BBQ Steak",  
        ingredients: ["Flank steak", "Soy sauce", "Brown sugar", "Garlic", "Sesame oil"],  
        price: 22.99,  
        image: "https://www.koreanbapsang.com/wp-content/uploads/2021/05/yangnyeom-galbi-12.jpg",  
        sideDish: { name: "Kimchi" },  
        drink: { name: "Soju" }  
    },  
    {  
        id: 19,  
        name: "Steak Tacos",  
        ingredients: ["Steak", "Corn tortillas", "Onion", "Cilantro", "Lime"],  
        price: 17.99,  
        image: "https://images.unsplash.com/photo-1591019201893-c8ef624e92f0",  
        sideDish: { name: "Refried Beans" },  
        drink: { name: "Agua Fresca" }  
    },  
    {  
        id: 20,  
        name: "Blackened Steak",  
        ingredients: ["Steak", "Blackening seasoning", "Butter"],  
        price: 24.99,  
        image: "https://www.gimmesomeoven.com/wp-content/uploads/2019/05/blackened-steak-2.jpg",  
        sideDish: { name: "Coleslaw" },  
        drink: { name: "Pale Ale" }  
    },  
    {  
        id: 21,  
        name: "Steak and Potatoes",  
        ingredients: ["Steak", "Potatoes", "Butter", "Herbs"],  
        price: 26.99,  
        image: "https://www.jessicagavin.com/wp-content/uploads/2017/08/seared-steak-with-potatoes-done-4.jpg",  
        sideDish: { name: "Corn Salad" },  
        drink: { name: "Red Wine" }  
    },  
    {  
        id: 22,  
        name: "Herb-Crusted Steak",  
        ingredients: ["Steak", "Herbs (parsley, thyme)", "Garlic", "Olive oil"],  
        price: 29.99,  
        image: "https://www.forkinthekitchen.com/wp-content/uploads/2021/04/herb-crusted-steak-3.jpg",  
        sideDish: { name: "Roasted Carrots" },  
        drink: { name: "White Wine" }  
    },  
    {  
        id: 23,  
        name: "Steak au Poivre",  
        ingredients: ["Steak", "Peppercorns", "Brandy", "Cream", "Butter"],  
        price: 35.99,  
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/5/24/0/FNK_Grilled-Steak-au-Poivre_s4x3.jpg.rend.hgtvcom.826.620.suffix/1531881542783.jpeg",  
        sideDish: { name: "Mashed Sweet Potatoes" },  
        drink: { name: "Stout" }  
    },  
    {  
        id: 24,  
        name: "Brazilian Picanha",  
        ingredients: ["Picanha steak", "Coarse salt", "Garlic", "Olive oil"],  
        price: 32.99,  
        image: "https://www.thespruceeats.com/thmb/l8aA-H5CCGHKX_l6ymCckUdH7eE=/1500x0/filters:no_upscale/1_Len-1-1-e14f00830c9e4e468de047ff6afad5d1.jpg",  
        sideDish: { name: "Fried Plantains" },  
        drink: { name: "Caipirinha" }  
    },  
    {  
        id: 25,  
        name: "Steak and Eggs",  
        ingredients: ["Steak", "Eggs", "Butter", "Salt", "Pepper"],  
        price: 18.99,  
        image: "https://www.browniepointsblog.com/wp-content/uploads/2021/02/Steak-and-Eggs-3.jpg",  
        sideDish: { name: "Hash Browns" },  
        drink: { name: "Bloody Mary" }  
    },  
    {  
        id: 26,  
        name: "Steak Burgers",  
        ingredients: ["Ground steak", "Cheese", "Bun", "Lettuce", "Tomato"],  
        price: 15.99,  
        image: "https://images.unsplash.com/photo-1571148651686-bd2d7e29c168",  
        sideDish: { name: "Onion Rings" },  
        drink: { name: "Craft Beer" }  
    },  
    {  
        id: 27,  
        name: "Stuffed Flank Steak",  
        ingredients: ["Flank steak", "Spinach", "Feta cheese", "Sun-dried tomatoes"],  
        price: 23.99,  
        image: "https://www.food.com/photo/stuffed-flank-steak-1719735",  
        sideDish: { name: "Herbed Rice" },  
        drink: { name: "Merlot" }  
    },  
    {  
        id: 28,  
        name: "Kibbeh Nayeh",  
        ingredients: ["Raw ground beef", "Bulgur", "Onions", "Spices"],  
        price: 12.99,  
        image: "https://images.unsplash.com/photo-1595572640296-d8d7e8e4066c",  
        sideDish: { name: "Pita Bread" },  
        drink: { name: "Mint Lemonade" }  
    },  
    {  
        id: 29,  
        name: "Steak Milanese",  
        ingredients: ["Sliced steak", "Bread crumbs", "Eggs", "Parsley"],  
        price: 21.99,  
        image: "https://www.thespruceeats.com/thmb/oyCvqV7iywcXV-TCM8dP9FDHWoU=/1500x0/filters:no_upscale/1/steak-milanese-1950734-hero-00-1cbd04864a22409f89768500918a29c4.jpg",  
        sideDish: { name: "Arugula Salad" },  
        drink: { name: "Prosecco" }  
    },  
    {  
        id: 30,  
        name: "Korean BBQ Beef",  
        ingredients: ["Beef short ribs", "Soy sauce", "Garlic", "Ginger", "Sesame oil"],  
        price: 27.99,  
        image: "https://www.koreanbapsang.com/wp-content/uploads/2023/03/galbi-bbq.jpg",  
        sideDish: { name: "Rice" },  
        drink: { name: "Korean Beer" }  
    }  
];


document.addEventListener("load",
    steakDishes.forEach(dish=>
        document.querySelector(".items-list").innerHTML += `
        <li>
            <input type="checkbox" id="dish-${dish.id}" hidden>
            <label for="dish-${dish.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
              ${dish.name}<span>${dish.price}$</span>
            </label>
            <div class="side-dish">
                <p>
                ${dish.ingredients.map(p=> p+" ")+"."}
                </p>
                <P>
                - served with ${dish.sideDish.name} and ${dish.drink.name} .</P>
            </div>
          </li>
        `
    )
)