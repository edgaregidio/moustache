const bcryptjs = require('bcryptjs')
const connection = require('../database/connection');
const { isEmail, encrypt } = require('../utils/')

module.exports = {
  create: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        return res.status(400).json({
          success: false,
          code: 'invalid_data',
          message: 'All fields required'
        });

      if (!isEmail(email))
        return res.status(400).json({
          sucess: false,
          code: 'invalid_data',
          message: 'The email provided is invalid'
        });

      const queryUser = await connection('users')
        .where('email', email)
        .select(['fullName', 'password'])
        .first();

      if (!queryUser) return res.status(404).json({
        success: false,
        code: 'incorrect_data',
        message: 'Wrong email or password'
      });

      const passwordMatch = bcryptjs.compareSync(password, queryUser.password);

      if (!passwordMatch)
        return res.status(406).json({
          success: false,
          code: 'incorrect_data',
          message: 'Wrong email or password'
        });

      const token = await encrypt(email);

      return res.status(200).json({
        sucess: true,
        message: 'User successfully logged in',
        user: {
          fullName: queryUser.fullName,
          email: queryUser.email,
        },
        token
      });

    } catch (error) {
      console.log('Error when validating login: ', error.toString());
      return res.status(500).json({
        sucess: false,
        code: 'unknown_error',
        message: error.toString()
      })
    }
  }
}