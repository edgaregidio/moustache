const bcryptjs = require('bcryptjs')
const connection = require('../database/connection');
const { isEmail, encrypt, decrypt } = require('../utils/index');

module.exports = {
  index: async (req, res) => {
    const users = await connection('users').select('*');
    return res.json(users);
  },

  create: async (req, res) => {
    try {
      const { fullName, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({
          sucess: false,
          code: 'invalid_data',
          message: 'The passwords provided are different'
        });
      }

      if (!isEmail(email)) return res.status(400).json({
        success: false,
        code: 'invalid_email',
        message: 'The email provided is invalid'
      });

      const userExists = await connection('users')
        .where('email', email)
        .first();

      if (userExists)
        return res.status(400).json({
          success: false,
          code: 'duplicated_email',
          message: 'The email you entered is already in use'
        });

      const passwordCrypt = await bcryptjs.hashSync(password, 8);

      await connection('users').insert({
        fullName,
        email,
        password: passwordCrypt
      });

      const token = await encrypt(email);
      return res.status(200).json({
        sucess: true,
        message: 'User successfully registered',
        token
      });

    } catch (error) {
      console.log('Error creating new user: ', error.toString());
      return res.status(500).json({
        success: false,
        code: 'unknown_error',
        message: error.toString()
      });
    }
  }
}