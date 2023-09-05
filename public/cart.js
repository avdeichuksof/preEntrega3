const socket = io()

socket.on('getCart', (data) => {
    document.addEventListener('DOMContentLoaded', async () => {
        data = await getCart()
        return cartLink.href = `/api/carts/${data}`
    })
})

const cartLink = document.querySelector('.cart')

const getCart = async () => {
    try {
        const res = await fetch('/api/carts')
        if(!res.ok) throw new Error('Cart not found')

        const cart = await res.json()
        console.log(cart)
        return cart
    } catch (err) {
        console.log(err)
        return null
    }
}

function addToCart(){
    const addProd =  document.getElementById('btnAdd')
    addProd.addEventListener('click', async () => {
        const quantity = document.getElementById('quantityInput')
        const prodId = addProd.dataset.id
        console.log('ID producto:', prodId)
        const cart = await getCart()
        
        try{
            const res = await fetch(`/api/carts/${cart}/products/${prodId}`, {
                body: JSON.stringify({quantity: quantity.value})
            })
            const toAdd = await res.json()
            console.log('Product added to cart', toAdd)
            socket.emit('addToCart', toAdd)
            return false
        }catch(err){
            console.log('Error adding product to cart', err)
        }

    })
}