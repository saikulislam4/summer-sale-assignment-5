// kitchen section function 
function targetSection(target) {
    const itemContainer = document.getElementById('itemContainer');
    const totalElementPrice = document.getElementById('totalPrice');

    // name and item price collect from dom
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const itemPrice = target.childNodes[3].childNodes[5].childNodes[0].innerText;

    // convert string to number and calculation total item price
    const cartElementTotalPrice = totalElementPrice.innerText;
    const totalPrice = parseFloat(cartElementTotalPrice) + parseFloat(itemPrice)

    // apply button and purchase button get by id
    const applyBtn = document.getElementById('applyBtn');
    const makePurchase = document.getElementById('makePurchase');

    // cart discount element and discount  get by id
    const afterDiscountElement = document.getElementById('afterDiscount');
    const totalTakaElement = document.getElementById('totalTaka');
    const couponElement = document.getElementById('couponInput');

    // validation and disable button 
    if (totalPrice >= 200) {
        applyBtn.disabled = false;
        applyBtn.classList.remove('disabledColor')

        applyBtn.addEventListener('click', function () {
            const couponField = couponElement.value;
            couponElement.value = ''
            if (couponField == '') {
                alert('20% off coupon code is (SELL200)');

            } else if (couponField !== 'SELL200') {
                return alert('invalid coupon code');
            } else {
                const afterDiscount = (20 / 100) * totalPrice;
                const totalTakaAfterDiscount = totalPrice - afterDiscount;

                // clear the input field
                couponElement.innerText = ''

                // set discount price 
                afterDiscountElement.innerText = afterDiscount.toFixed(2);
                totalTakaElement.innerText = totalTakaAfterDiscount.toFixed(2);
            }
        })

    } else if (totalPrice > 0) {
        makePurchase.disabled = false;
        makePurchase.classList.remove('disabledColor')
    }

    // create element for cart section
    const element = document.createElement('div');

    //cart container child element count
    const count = itemContainer.childElementCount;

    // set element cart container
    element.innerHTML = `${count + 1} ${itemName}  `

    // set element in cart item
    itemContainer.appendChild(element);
    totalElementPrice.innerText = totalPrice.toFixed(2);
    totalTakaElement.innerText = totalPrice.toFixed(2);

    // make Purchase and clear the cart container
    document.getElementById('makePurchase').addEventListener('click', function () {
        totalTakaElement.innerText = "00";
        afterDiscountElement.innerText = "00";
        totalElementPrice.innerText = "00";
        itemContainer.innerHTML = "";
        couponElement.value = "";

    })

}