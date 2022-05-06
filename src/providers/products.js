import { createContext, useState, useContext } from "react";
export const CatalogueContext = createContext();
export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    {
      id: 1,
      name: " Disney Hocus Pocus Winifred Sanderson",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeblplRl3t7h1XsGRt2RuiQse0sCgU91JPQ&usqp=CAU",
    },
    {
      id: 2,
      name: " Disney Hocus Pocus Mary Sanderson",
      price: 155,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDhfcdY1936wluzy0dlc81_f2999_HLU8tQ&usqp=CAU",
    },
    {
      id: 3,
      name: " Disney Hocus Pocus Sarah Sanderson",
      price: 143,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8c9d7ebkWaTHFDepIWXf0fk5ZmADaPM1W6moAg658Ljlk1j2GHK13sI8JUg5-gF80Gw&usqp=CAU",
    },
    {
      id: 4,
      name: " Disney Hocus Pocus Dani with Binx",
      price: 155,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yeeQVOXL07JDCv5DJyXG5LoOdJDP63M6Xg&usqp=CAU",
    },
  ]);

  return (
    <CatalogueContext.Provider value={{ catalogue, setCatalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
export const useCatalogue = () => useContext(CatalogueContext);