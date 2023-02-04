const generateOrderObject = ({
    name = "",
    lastName = "",
    email = "",
    numSett = 0
}) => {
    return {
        newSettlerResposible: {
            name: name,
            lastName: lastName,
            email: email,
        },
        numberOfSettlers: numSett,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;