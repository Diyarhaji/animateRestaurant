import { useState } from "react";


const MultiFilters = () => {
  const [activeCategory, setActiveCategory] = useState("Burgers");

  const categories = [
    
    { value: "Burgers", label: "Burgers" },
    { value: "Desserts", label: "Desserts" },
    { value: "Pasta", label: "Pasta" },
    { value: "Pizzas", label: "Pizzas" },
  ];

  const projects = [
  {
    id: 1,
    title: "Vincent",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/12-3-600x600.png",
    description: "A classic burger crafted with premium beef, fresh lettuce, and a special house sauce, delivering a balanced, juicy flavor in every bite.",
    price: "5.00",
    category: "Burgers",
  },
  {
    id: 2,
    title: "Margherita",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/11-3-600x600.png",
    description: "Simple yet delicious, this Margherita burger combines ripe tomatoes, fresh mozzarella, and aromatic basil for an Italian-inspired taste.",
    price: "5.80",
    category: "Burgers",
  },
  {
    id: 3,
    title: "Diablo",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/10-3-600x600.png",
    description: "A fiery burger for spice lovers, loaded with jalapeños, pepper jack cheese, and a bold chipotle mayo to ignite your palate.",
    price: "6.50",
    category: "Burgers",
  },
  {
    id: 4,
    title: "Venetia",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/9-3-600x600.png",
    description: "Inspired by Venetian flavors, this burger features fresh herbs, creamy cheese, and a savory garlic aioli for a gourmet experience.",
    price: "7.20",
    category: "Burgers",
  },
  {
    id: 5,
    title: "Florence",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/8-3-600x600.png",
    description: "The Florence burger offers a unique blend of sun-dried tomatoes, aged parmesan, and arugula, topped with a tangy balsamic glaze.",
    price: "7.80",
    category: "Burgers",
  },
  {
    id: 6,
    title: "Roma",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/7-3-600x600.png",
    description: "Juicy and rich, the Roma burger is layered with smoky bacon, melted cheddar, and crisp lettuce for a satisfying meal.",
    price: "8.40",
    category: "Burgers",
  },
  {
    id: 7,
    title: "Verona",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/6-3-600x600.png",
    description: "A gourmet burger with roasted peppers, provolone cheese, and fresh herbs, offering a vibrant and rich taste experience.",
    price: "9.00",
    category: "Burgers",
  },
  {
    id: 8,
    title: "Milano",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/5-3-600x600.png",
    description: "The Milano burger delights with sautéed mushrooms, Swiss cheese, and caramelized onions atop a succulent beef patty.",
    price: "9.80",
    category: "Burgers",
  },
  {
    id: 9,
    title: "Neapolitano",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/4-3-600x600.png",
    description: "Classic Neapolitan flavors shine with fresh mozzarella, basil, and a zesty tomato sauce layered on a toasted bun.",
    price: "10.50",
    category: "Burgers",
  },
  {
    id: 10,
    title: "Toscana",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/3-3-600x600.png",
    description: "Featuring fresh herbs and a creamy ricotta spread, the Toscana burger brings the flavors of the Tuscan countryside to your plate.",
    price: "11.20",
    category: "Burgers",
  },
  {
    id: 11,
    title: "Toledo",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/2-3-600x600.png",
    description: "Smoky and bold, the Toledo burger is crafted with chipotle sauce, pepper jack cheese, and crispy onions for a fiery bite.",
    price: "11.80",
    category: "Burgers",
  },
  {
    id: 12,
    title: "Palermo",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/1-3-600x600.png",
    description: "With spicy Sicilian peppers and creamy goat cheese, the Palermo burger offers a unique and flavorful profile.",
    price: "12.50",
    category: "Burgers",
  },
  {
    id: 13,
    title: "Amaretti",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/12-4-600x600.png",
    description: "A sweet and crunchy treat, these Amaretti cookies feature almond flavors with a delicate, crumbly texture.",
    price: "5.20",
    category: "Desserts",
  },
  {
    id: 14,
    title: "Bostrengo",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/11-4-600x600.png",
    description: "Traditional Bostrengo cake, rich with nuts, dried fruits, and a hint of spice—perfect for a hearty dessert.",
    price: "6.00",
    category: "Desserts",
  },
  {
    id: 15,
    title: "Bigne",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/10-4-600x600.png",
    description: "Light and airy cream-filled Bigne pastries, offering a perfect balance of sweetness and soft texture.",
    price: "6.80",
    category: "Desserts",
  },
  {
    id: 16,
    title: "Budino",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/9-4-600x600.png",
    description: "Rich and velvety Budino pudding with a smooth chocolate flavor, perfect for an indulgent treat.",
    price: "7.40",
    category: "Desserts",
  },
  {
    id: 17,
    title: "Budino di ricotta",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/8-4-600x600.png",
    description: "A creamy ricotta Budino with subtle vanilla notes and a delicate sweetness that melts in your mouth.",
    price: "8.10",
    category: "Desserts",
  },
  {
    id: 18,
    title: "Biscotti di avena",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/7-4-600x600.png",
    description: "Crunchy oat Biscotti with hints of honey and cinnamon, ideal for dipping into coffee or tea.",
    price: "8.80",
    category: "Desserts",
  },
  {
    id: 19,
    title: "Coviglia di caffe",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/6-4-600x600.png",
    description: "Coffee-flavored Coviglia pastries with a perfect blend of bitterness and sweetness in each bite.",
    price: "9.40",
    category: "Desserts",
  },
  {
    id: 20,
    title: "Casadinas",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/5-4-600x600.png",
    description: "Traditional Casadinas stuffed with fresh cheese and drizzled with honey, a Sardinian specialty.",
    price: "10.00",
    category: "Desserts",
  },
  {
    id: 21,
    title: "Pan di Spagna",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/4-4-600x600.png",
    description: "Light and fluffy sponge cake Pan di Spagna, perfect as a base for many desserts or enjoyed alone.",
    price: "10.80",
    category: "Desserts",
  },
  {
    id: 22,
    title: "Panettone",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/3-4-600x600.png",
    description: "Classic Italian Panettone bread, studded with raisins and candied fruit, soft and aromatic.",
    price: "11.50",
    category: "Desserts",
  },
  {
    id: 23,
    title: "Frittelle",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/2-4-600x600.png",
    description: "Sweet and fluffy Frittelle fritters, lightly dusted with powdered sugar, perfect for breakfast or dessert.",
    price: "12.20",
    category: "Desserts",
  },
  {
    id: 24,
    title: "Cappuccini affogati",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/1-4-600x600.png",
    description: "Delicious coffee-soaked Cappuccini pastries that combine the best of espresso and dessert flavors.",
    price: "12.90",
    category: "Desserts",
  },
  {
    id: 25,
    title: "Bucatini",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/12-2-600x600.gif",
    description: "Classic Bucatini pasta, thick spaghetti with a hollow center, ideal for capturing rich sauces.",
    price: "5.20",
    category: "Pasta",
  },
  {
    id: 26,
    title: "Cannelloni",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/10-2-600x600.gif",
    description: "Tender pasta tubes stuffed with ricotta and spinach, baked with tomato sauce and melted cheese.",
    price: "6.00",
    category: "Pasta",
  },
  {
    id: 27,
    title: "Casunziei",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/11-2-600x600.png",
    description: "Delicate half-moon shaped pasta filled with beet and ricotta, served with butter and sage.",
    price: "6.80",
    category: "Pasta",
  },
  {
    id: 28,
    title: "Farfalle",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/9-2-600x600.png",
    description: "Bow tie shaped Farfalle pasta, versatile and perfect with creamy or tomato-based sauces.",
    price: "7.40",
    category: "Pasta",
  },
  {
    id: 29,
    title: "Fusilli",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/8-2-600x600.png",
    description: "Spiral Fusilli pasta that holds sauces beautifully, adding texture and flavor to any dish.",
    price: "8.10",
    category: "Pasta",
  },
  {
    id: 30,
    title: "Gnocchi",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/7-2-600x600.png",
    description: "Soft potato Gnocchi that melt in your mouth, perfect with butter, sage, or rich tomato sauce.",
    price: "8.80",
    category: "Pasta",
  },
  {
    id: 31,
    title: "Culingionis",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/6-2-600x600.png",
    description: "Traditional Culingionis pasta filled with aromatic herbs and cheese, a regional favorite.",
    price: "9.40",
    category: "Pasta",
  },
  {
    id: 32,
    title: "Fettuccine",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/5-2-600x600.png",
    description: "Wide ribbon Fettuccine pasta, perfect for creamy Alfredo sauces or hearty ragùs.",
    price: "10.00",
    category: "Pasta",
  },
  {
    id: 33,
    title: "Lasagne",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/4-2-600x600.png",
    description: "Layered Lasagne with rich meat sauce, béchamel, and melted cheese for a classic comfort dish.",
    price: "10.80",
    category: "Pasta",
  },
  {
    id: 34,
    title: "Strangolapretti",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/3-2-600x600.png",
    description: "Traditional Strangolapretti dumplings, made from spinach and bread crumbs, served with melted butter.",
    price: "11.50",
    category: "Pasta",
  },
  {
    id: 35,
    title: "Malfatt",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/2-2-600x600.png",
    description: "Rustic Malfatt pasta filled with ricotta and herbs, perfect when paired with sage butter sauce.",
    price: "12.20",
    category: "Pasta",
  }, {
    id: 36,
    title: "Pici",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/1-2-600x600.png",
    description: "Thick hand-rolled Pici pasta from Tuscany, ideal with robust meat or garlic sauces for a hearty meal.",
    price: "12.90",
    category: "Pasta",
  },
  {
    id: 37,
    title: "Margherita",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/11-600x600.gif",
    description: "Classic pizza with fresh tomatoes and mozzarella cheese.",
    price: "12.50",
    category: "Pizzas",
  },
  {
    id: 38,
    title: "Vincent",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/10-600x600.gif",
    description: "Special pizza with rich tomato sauce and spices.",
    price: "19.20",
    category: "Pizzas",
  },
  {
    id: 39,
    title: "Pepperoni",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/2-600x600.gif",
    description: "Spicy pepperoni slices on melted cheese.",
    price: "14.75",
    category: "Pizzas",
  },
  {
    id: 40,
    title: "Diablo",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/6-600x600.gif",
    description: "Fiery hot pizza with jalapeños and chili flakes.",
    price: "20.00",
    category: "Pizzas",
  },
  {
    id: 41,
    title: "Carbonara",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/8-600x600.gif",
    description: "Creamy carbonara sauce with bacon and parmesan.",
    price: "18.90",
    category: "Pizzas",
  },
  {
    id: 42,
    title: "Capricciosa",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/4-600x600.gif",
    description: "A delicious mix of ham, mushrooms, and olives.",
    price: "15.40",
    category: "Pizzas",
  },
  {
    id: 43,
    title: "Prosciutto",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/7-2-1-600x600.gif",
    description: "Topped with thinly sliced prosciutto and arugula.",
    price: "21.30",
    category: "Pizzas",
  },
  {
    id: 44,
    title: "Saporita",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/9-600x600.gif",
    description: "Rich, flavorful sauce with fresh herbs and cheese.",
    price: "16.60",
    category: "Pizzas",
  },
  {
    id: 45,
    title: "Calzone",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/12-600x600.gif",
    description: "Folded pizza filled with cheese and cured meats.",
    price: "22.00",
    category: "Pizzas",
  },
  {
    id: 46,
    title: "Neapolitano",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/3-600x600.gif",
    description: "Traditional pizza with fresh basil and mozzarella.",
    price: "13.50",
    category: "Pizzas",
  },
  {
    id: 47,
    title: "Tarantella",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/1-600x600.gif",
    description: "A savory pizza with rich tomato and spicy toppings.",
    price: "17.80",
    category: "Pizzas",
  },
  {
    id: 48,
    title: "Fortezza",
    image: "https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/03/5-600x600.gif",
    description: "Bold flavors with meat and cheese blend.",
    price: "23.75",
    category: "Pizzas",
  },
];

  const filteredProjects = projects.filter(
  (project) => project.category === activeCategory
);

  return (
    <div className="p-6 py-20 w-full">
      {/* Filter Buttons */}
      <div
       
        className="flex max-sm:text-md max-sm:px-3 gap-4 mx-auto mb-16 max-w-max py-3   px-12 rounded-full bg-[#363837]"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-2 max-sm:text-[19px] max-sm:p-1 text-xl  py-2 rounded-full border ${
              activeCategory === cat.value
                ? " text-first border-none"
                : "bg-transparent text-white border-none"
            } transition duration-300`}
          >
            {cat.label}
          </button>
        ))}
      </div>



      {/* Project Cards */}
      <div className="grid max-sm:grid-cols-1 grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div  key={project.id} className="py-3 px-6">
          
            <div className="w-[200px] mx-auto">
              <img src={project.image} alt={project.title} className="w-ful h-full"/>
            </div>

            
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-first font-bold">{project.title} </h1>
                <p className="text-xl text-first">${project.price}</p>
              </div>
               <p className="mt-3 text-md">{project.description}</p>
              
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiFilters;
