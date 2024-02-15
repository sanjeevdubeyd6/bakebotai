import React from 'react'

function Checkout() {
    const productionURL = 'https://bakedbot-production.up.railway.app/payment'
    const buyPlan = async (price) => {
        const apiEndpoint = productionURL
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { price: price*100,
                    //email: localStorage.getItem('email')
                },
                )
        }
        const response = await fetch(apiEndpoint, requestOptions)
        const data = await response.json()
        console.log(data)
        const {url} = data
        console.log(url)
        window.location.href = url
    }

    React.useMemo(() => {
        if(localStorage.getItem('price')){
            buyPlan(localStorage.getItem('price'))
        }
        else {
            window.location.href = '/'
        }
    }, [])
    return (
        <div>Checkout</div>
    )
}

export default Checkout