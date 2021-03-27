const User = require('../models/in_memo/user')
const Subscription = require('../models/in_memo/subscription')

module.exports.getAllUsers = function () {
    return User.list()
}
module.exports.addNewUser = (firstName, lastName, age) => {
    return User.insect(firstName, lastName, age)
}
module.exports.getUserById = userId => {
    return User.getOneById(userId)
}
module.exports.createSubscription = (userId,url) => {
    const user = User.getOneById(userId)
    if(!user) throw Error('No-such-user')
    const sub = Subscription.insert(userId, url)
    return sub
}
