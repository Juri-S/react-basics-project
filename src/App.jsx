import React, { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
// In App.jsx, you want to keep track of 
// a selected recipe item in a state and 
// show a <RecipePage /> component 
//  if the user has selected one.
//  Else show the <RecipeListPage /> 
//  that will contain an overview of all recipes.
export const App = () => {

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectedRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  }


const handleBack = () => {
  setSelectedRecipe(null);
}


  // Your state code here
  return (
    <div>
      {selectedRecipe ? <RecipePage recipe={selectedRecipe} onBack={handleBack}/> : <RecipeListPage onSelectedRecipe={handleSelectedRecipe} />}
    </div>
  )
};
