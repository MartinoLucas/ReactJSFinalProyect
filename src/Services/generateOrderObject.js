const generateOrderObject = ({
    name = "",
    lastName = "",
    age = 0,
    email = "",
    cart = [],
    total = 0
}) => {
    return {
        buyer: {
            name: name,
            lastName: lastName,
            age: age,
            email: email
        },
        items: cart,
        total:total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;