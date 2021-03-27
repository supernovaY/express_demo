// 贫血模式，只有数据没有方法
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.id = User.id++
    }

    getName() {
        return `${this.firstName} ${this.lastName}`
    }

    static insect(firstName, lastName, age) {
        const u = new User(...arguments)
        User.users.push(u)
        return u
    }

    static getOneByName(firstName, lastName, age) {
        return User.users.find(u => u.firstName === firstName && u.lastName === lastName)
    }

    static getOneById(userId) {
        return User.users.find(u => u.id === userId)
    }

    static list(query) {
        return User.users
    }

}

// 等价于 User.insect = function(firstName, lastName, age) {
//     const u = new User(...arguments)
//     User.users.push(u)
//     return u
// } static等于把一个insect对象方法挂到当前对象类的User身上
// User.insect()
User.users = []
User.id = 0
module.exports = User
