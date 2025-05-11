useEffect(() => {
  const fetchProducts = async () => {
    const data = await getProducts(filterQuery);
    setProducts(data);
  };
  fetchProducts();
}, [filterQuery]);