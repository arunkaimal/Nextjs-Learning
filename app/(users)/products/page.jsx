const Products = async ({ searchParams }) => {
    const searchParam = await searchParams;
    // console.log(searchParam);   

  const category = searchParam?.category || "all";
  const sort = searchParam?.sort || "default";
  const page = searchParam?.page || 1;

  return (
    <h1>
      Category: {category} , Sort : {sort} , Page : {page}
    </h1>
  );
};

export default Products;
