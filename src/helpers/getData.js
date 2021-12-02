import { productsList } from '../data/data.js'

const getById = (id, array) => array.find((element) => element.id === id);

// promesas
const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  //async await que seteando mi hook de estado
  const getAllProductsFromDB = async (setState) => {
    try {
      const result = await getProducts;
      setState(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

const getProductById = async (id, setState) => {
    try {
        const result = await getProducts;
        setState(getById(id, result));
    } catch (error) {
        console.log(error);
    }
    };
      
export { getAllProductsFromDB, getProductById }