import { useState } from "react";

const [isCancel, setIsCancel] = useState(false);
export const onClickBasket = (basket: IUseditem) => () => {
  const baskets: Pick<
    IUseditem,
    "contents" | "remarks" | "_id" | "name" | "price" | "seller" | "images"
  >[] = JSON.parse(localStorage.getItem("baskets") || "[]");
  console.log(baskets);

  const temp = baskets.filter((el) => el._id === basket._id);

  if (temp.length === 1) {
    const edited = baskets.filter((el) => el._id !== basket._id);
    localStorage.setItem("baskets", JSON.stringify(edited));
    setIsCancel((prev) => !prev);
    return;
  }
  // 3. 해당 장바구니에 담기
  const { __typename, ...newBasket } = basket;
  baskets.push(newBasket);
  localStorage.setItem("baskets", JSON.stringify(baskets));

  setIsCancel((prev) => !prev);
};
