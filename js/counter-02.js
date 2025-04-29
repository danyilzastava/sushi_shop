window.addEventListener('click', function(event){

let counter;

if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
    const countWrapper = event.target.closest('.counter-wrapper')
    counter = countWrapper.querySelector('[data-counter]')
}

if(event.target.dataset.action === 'plus'){
    counter.innerText = ++counter.innerText;
}

if(event.target.dataset.action === 'minus'){

    if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
        event.target.closest('.cart-item').remove();
        
        toggleCartStatus();

        calcCartPriceAndDelivery();

    }


}

if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
    calcCartPriceAndDelivery();
}

});

// 3 ≠ 1 // 3 > 1 // 2 // 2 ≠ 1 // 2 > 1 // 1 // 1 = 1 // remove // 1 > 1 // 1 