# Chef Claude Recipe Code Base

This document contains the complete collection of recipe templates and components for the **Chef Claude** React application (Scrimba Learn React v3 - Section 3).

---

## 1. Component Implementation (`RecipeCode.jsx`)
<!-- 
Here is how the recipe content is rendered as a React component:

```jsx
import React from "react"

export default function SuggestedRecipe(props) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p>
                    Based on the ingredients you have available, I would recommend making a delicious 
                    <strong>{props.recipe.title}</strong>. Here is the recipe:
                </p>
                <h3>{props.recipe.title}</h3>
                <strong>Ingredients:</strong>
                <ul>
                    {props.recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <strong>Instructions:</strong>
                <ol>
                    {props.recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </article>
        </section>
    )
}
``` -->

---

## 2. Full Recipe Templates (HTML / JSX Markup)

### Recipe 1: Beef Bolognese Pasta (Original Example)

```html
<section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until softened and fragrant.</li>
            <li>Stir in the tomato paste, crushed tomatoes, beef broth, oregano, and basil. Reduce heat to low and simmer for 15-20 minutes.</li>
            <li>Meanwhile, cook the pasta according to package instructions until al dente. Drain well.</li>
            <li>Season the sauce with salt and pepper to taste. Serve hot over cooked pasta with grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
```

---

### Recipe 2: Creamy Garlic Tuscan Chicken

```html
<section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a delicious <strong>Creamy Garlic Tuscan Chicken</strong>. Here is the recipe:</p>
        <h3>Creamy Garlic Tuscan Chicken</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>2 large chicken breasts, sliced horizontally into thin cutlets</li>
            <li>1 tablespoon olive oil</li>
            <li>1 tablespoon butter</li>
            <li>3 cloves garlic, minced</li>
            <li>1/2 cup chicken broth</li>
            <li>1 cup heavy cream</li>
            <li>1/2 cup sun-dried tomatoes, drained and sliced</li>
            <li>2 cups fresh baby spinach</li>
            <li>1/2 cup grated Parmesan cheese</li>
            <li>Salt, pepper, and Italian seasoning to taste</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Season chicken cutlets with salt, pepper, and Italian seasoning.</li>
            <li>Heat olive oil and butter in a large skillet over medium-high heat. Sear chicken for 4-5 minutes per side until golden and cooked through, then remove and set aside.</li>
            <li>In the same skillet, add garlic and cook for 1 minute until fragrant.</li>
            <li>Pour in chicken broth and heavy cream, bringing to a gentle simmer. Stir in sun-dried tomatoes and Parmesan cheese.</li>
            <li>Add fresh spinach and let it wilt in the sauce. Place chicken back into the skillet and coat with sauce before serving.</li>
        </ol>
    </article>
</section>
```

---

### Recipe 3: Vegetable Stir-Fry with Tofu

```html
<section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a delicious <strong>Vegetable Stir-Fry with Tofu</strong>. Here is the recipe:</p>
        <h3>Vegetable Stir-Fry with Tofu</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 block extra-firm tofu, drained and cubed</li>
            <li>1 tablespoon sesame oil</li>
            <li>1 bell pepper, sliced</li>
            <li>1 cup broccoli florets</li>
            <li>1 carrot, thinly sliced</li>
            <li>2 tablespoons soy sauce</li>
            <li>1 tablespoon maple syrup or honey</li>
            <li>1 teaspoon grated fresh ginger</li>
            <li>2 cloves garlic, minced</li>
            <li>Cooked white or brown rice for serving</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Heat sesame oil in a wok or large skillet over high heat. Add cubed tofu and fry until golden on all sides, about 6-8 minutes. Remove tofu.</li>
            <li>Add broccoli, bell pepper, and carrots to the skillet. Stir-fry for 3-4 minutes until crisp-tender.</li>
            <li>In a small bowl, whisk together soy sauce, maple syrup, ginger, and minced garlic.</li>
            <li>Return tofu to the pan, pour the sauce over everything, and toss well to coat for 1-2 minutes until heated through. Serve over hot rice.</li>
        </ol>
    </article>
</section>
```

---

### Recipe 4: Classic Lemon Herb Baked Salmon

```html
<section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a delicious <strong>Classic Lemon Herb Baked Salmon</strong>. Here is the recipe:</p>
        <h3>Classic Lemon Herb Baked Salmon</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>4 salmon fillets (6 oz each)</li>
            <li>2 tablespoons olive oil</li>
            <li>2 tablespoons fresh lemon juice</li>
            <li>2 cloves garlic, minced</li>
            <li>1 teaspoon dried dill or fresh chopped parsley</li>
            <li>1 lemon, thinly sliced</li>
            <li>Salt and freshly cracked black pepper to taste</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper or foil.</li>
            <li>In a small bowl, mix olive oil, lemon juice, minced garlic, dill, salt, and pepper.</li>
            <li>Place salmon fillets on the baking sheet and pour the lemon-herb mixture evenly over each fillet.</li>
            <li>Top each fillet with 1-2 slices of fresh lemon.</li>
            <li>Bake for 12-15 minutes until salmon is flaky and cooked through. Serve immediately.</li>
        </ol>
    </article>
</section>
```

---

### Recipe 5: Quick Black Bean & Corn Tacos

```html
<section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making delicious <strong>Quick Black Bean & Corn Tacos</strong>. Here is the recipe:</p>
        <h3>Quick Black Bean & Corn Tacos</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 (15 oz) can black beans, rinsed and drained</li>
            <li>1 cup sweet corn (fresh, frozen, or canned)</li>
            <li>1 teaspoon ground cumin</li>
            <li>1/2 teaspoon chili powder</li>
            <li>1/2 teaspoon garlic powder</li>
            <li>6 warm corn or flour tortillas</li>
            <li>1 ripe avocado, sliced</li>
            <li>1/2 cup salsa or pico de gallo</li>
            <li>Fresh cilantro and lime wedges for serving</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>In a skillet over medium heat, warm the black beans and corn together with cumin, chili powder, and garlic powder for 3-5 minutes until heated through.</li>
            <li>Warm the tortillas in a dry skillet or microwave for a few seconds.</li>
            <li>Spoon the black bean and corn mixture evenly into each tortilla.</li>
            <li>Top with avocado slices, salsa, fresh cilantro, and a squeeze of lime juice before serving.</li>
        </ol>
    </article>
</section>
```

---

## 3. Data Structure (`recipesData.js`)

If you are storing these dynamically in JS:
<!-- 
```javascript
export const recipes = [
  {
    id: "bolognese",
    title: "Beef Bolognese Pasta",
    ingredients: [
      "1 lb. ground beef",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "2 tablespoons tomato paste",
      "1 (28 oz) can crushed tomatoes",
      "1 cup beef broth",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "8 oz pasta of your choice"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil for the pasta.",
      "In a large skillet or Dutch oven, cook the ground beef over medium-high heat until browned, about 5-7 minutes.",
      "Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes.",
      "Stir in the tomato paste, crushed tomatoes, beef broth, oregano, and basil. Simmer for 15-20 minutes.",
      "Meanwhile, cook the pasta according to package instructions. Drain well.",
      "Season the sauce with salt and pepper to taste. Serve hot over cooked pasta."
    ]
  },
  {
    id: "tuscan-chicken",
    title: "Creamy Garlic Tuscan Chicken",
    ingredients: [
      "2 large chicken breasts, cut into cutlets",
      "1 tablespoon olive oil",
      "1 tablespoon butter",
      "3 cloves garlic, minced",
      "1/2 cup chicken broth",
      "1 cup heavy cream",
      "1/2 cup sun-dried tomatoes",
      "2 cups fresh baby spinach",
      "1/2 cup grated Parmesan cheese",
      "Salt, pepper, and Italian seasoning to taste"
    ],
    instructions: [
      "Season chicken with salt, pepper, and Italian seasoning.",
      "Sear chicken in olive oil and butter for 4-5 minutes per side. Remove from pan.",
      "Sauté garlic for 1 minute until fragrant.",
      "Add broth, cream, sun-dried tomatoes, and Parmesan cheese. Simmer until sauce thickens.",
      "Stir in spinach until wilted, return chicken to pan, and coat with sauce before serving."
    ]
  }
];
``` -->