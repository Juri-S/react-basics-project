import React from 'react';
import { Box, Image, Text, Badge, Center, Heading, Button } from '@chakra-ui/react';

export const RecipePage = ({recipe, onBack}) => {
 
  return (
    <Center flexDir="column" py={10}>
      <Button onClick={onBack}>Back</Button>
      <Box w='80%' borderWidth="1px" borderRadius="lg" overflow="hidden" mt={5}>
        <Image src={recipe.image} alt={recipe.label} w='500px' />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {recipe.healthLabels.map((label) => (
              <Badge key={label} borderRadius="full" px="2" colorScheme="teal">
                {label}
              </Badge>
            ))}
          </Box>
          <Box>
            <Text mt="1" fontSize="xl" fontWeight="semibold" lineHeight="short">
              {recipe.label}
            </Text>
            <Text>{recipe.dietLabels}</Text>
            <Text>{recipe.cautions}</Text>
            <Text>{recipe.mealType}</Text>
            <Text>{recipe.dishType}</Text>
          </Box>
        </Box>
      </Box>
    </Center>
  )
};
