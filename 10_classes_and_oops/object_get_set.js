const User = {
    _email: "shubhamjoshi0304@gmail.com",
    _password: "password",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }
};


const tea = Object.create(User);
console.log(tea.email);
