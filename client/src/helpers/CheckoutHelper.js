function getTotalPrice(cartList = []) {
    const initialValue = 0;
    const totalPrice = cartList.reduce((accumulator, currentValue) => Math.round((accumulator + currentValue.prices[0].amount * currentValue.qty) * 100) / 100, initialValue);
    return totalPrice;
}
export default getTotalPrice;