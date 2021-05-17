const withdrawService = (value) => {
    const cedules = [200, 100, 50, 20, 10, 5, 2, 1]
    let withdraw = []
    for (let index = 0; index < cedules.length; index++){
        if (value >= cedules[index]){
            withdraw.push({cedule: cedules[index], quantity: Math.floor(value / cedules[index])})
            value = value % cedules[index]
        }
    }

    return withdraw
}

export default withdrawService