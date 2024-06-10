import React, {useState} from 'react';
import { Box, Image, Text, Badge , Center, Heading, Input} from '@chakra-ui/react';
import { data } from '../utils/data';


// In RecipeListPage.jsx, 
// you can use the imported recipe 
// data and display a list of all recipes.
//  Show the following details for each recipe:

// Recipe name

// A picture of the recipe/meal

// Diet label (if present)

// Cautions (if present)

// Meal type

// Dish type

// Each item shows the following health labels (if present):

// Vegan

// Vegetarian

export const RecipeListPage = ({onSelectedRecipe}) => {
  const [searchTerm, setSearchTearm] = useState('');
  console.log(data.hits)


  const filteredData = data.hits.filter(({recipe}) => recipe.label.toLowerCase().includes(searchTerm.toLowerCase()))



  

  return (
    <Center flexDir="column" py={10}>
      <Heading mb={10}>Recipe List</Heading>
      <Input 
      placeholder="Search Recipe" 
      value={searchTerm}
      onChange={(e) => setSearchTearm(e.target.value)}
      mb={5}
      width="50%"
      />
      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        {
          filteredData.map(({recipe}) => (
            <Box 
            key={recipe.label} 
            m={5} p={5} 
            w='300px' 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
            onClick={()=>onSelectedRecipe(recipe)}
            >
              <Image src={recipe.image} alt={recipe.label} />
              <Text fontSize='xl' mt={2}>{recipe.label}</Text>
              <Text fontSize='md' mt={2}>{recipe.dietLabels && <Badge colorScheme='green'>{recipe.dietLabels[0]}</Badge>}</Text>
              <Text fontSize='md' mt={2}>{recipe.cautions && <Badge colorScheme='red'>{recipe.cautions[0]}</Badge>}</Text>
              <Text fontSize='md' mt={2}>{recipe.mealType}</Text>
              <Text fontSize='md' mt={2}>{recipe.dishType}</Text>
              <Text fontSize='md' mt={2}>{recipe.healthLabels.includes('Vegan') && <Badge colorScheme='green'>Vegan</Badge>}</Text>
              <Text fontSize='md' mt={2}>{recipe.healthLabels.includes('Vegetarian') && <Badge colorScheme='green'>Vegetarian</Badge>}</Text>
            </Box>
          ))
        }

      </Box>
      
    </Center>
  );
};
