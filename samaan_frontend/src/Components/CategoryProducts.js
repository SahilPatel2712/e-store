import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCardTwo from "./ProductCardTwo";
import { SkeletonCardTwo } from "./Skeletons";
import { useSelector } from "react-redux";

const CategoryProducts = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { productsData } = useSelector((state) => state.products);
  const navigate = useNavigate();
  useEffect(() => {
    let filterData = productsData.filter(
      (product) => product.categoryId === Number(id)
    );
    if (productsData.length !== 0) {
      if (filterData.length !== 0) {
        setData(filterData);
      } else {
        navigate("*");
      }
    }
  }, [productsData]);
  return (
    <div>
      <div className="w-[100%] h-[100%] mt-[8rem]   ">
        <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit  ">
          <div className="OnSearchOuter Vflex AroundFlex">
            <div className="OnSearchInnerRight">
              <div>
                <div className="RightOuter">
                  <div className="ProductsDiv">
                    {data.length !== 0
                      ? data.map((item, id) => {
                          return (
                            <ProductCardTwo
                              key={item.productId}
                              name={item.productName}
                              price={item.productPrice}
                              imgSrc={item.productImage}
                              weight={item.productWeight}
                              productId={item.productId}
                              quantity={item.productQuantity}
                            />
                          );
                        })
                      : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                          (item, id) => {
                            return <SkeletonCardTwo />;
                          }
                        )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
