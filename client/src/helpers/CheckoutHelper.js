function getTotalPrice(cartList = []) {
    const initialValue = 0;
    const totalPrice = cartList.reduce((accumulator, currentValue) => accumulator + currentValue.prices[0].amount * currentValue.qty, initialValue);
    return totalPrice;
}
export default getTotalPrice;