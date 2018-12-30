'use strict'
const User = use('App/Models/User');
class UserController {

    async signup({ request, auth, response }) {
        const user = await User.create(request.all())
        const token = await auth.generate(user)
        return response.json({
            message: 'Successfully',
            data: token
        })
    }
      
    async signin({ request, response, auth }) {
        try {
            const parameter = request.only(['email', 'password'])

            if (!parameter) {
                return response.status(404).json({ data: 'Resource not found' })
            }

            const token = await auth.attempt(parameter.email, parameter.password)
            return response.json({
                token: token
            })
        } catch (err) {
            return response.status(400).json({
                status: 'error',
                message: 'Problem occured while trying to sigin. Please try again.'
            })
        }
    }
    async logout({ auth, response }) {

        response.status(200).json({
            messages: 'Your Logout'
        })
    }
}

module.exports = UserController