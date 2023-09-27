
function getTotalQty(cartList = []) {
    const initialValue = 0;
    const totalQty = cartList.reduce((accumulator, currentValue) => accumulator + currentValue.qty, initialValue);
    return totalQty;
}
export default getTotalQty;
