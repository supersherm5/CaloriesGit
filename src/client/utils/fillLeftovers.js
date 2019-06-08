/* eslint-disable no-loop-func */

export const fillLeftover = (products, limit) => {
  let leftovers = [];

  while (limit >= 0) {
    const eligiblProducts = products.filter((p) => {
      return (p.caffeinePerServing * p.servings) <= limit;
    });

    leftovers = eligiblProducts.map((p) => {
      limit = limit - (p.caffeinePerServing * p.servings);
      if (limit >= 0) return p;
    });
  }
  return leftovers.filter((p) => p !== undefined);
};
