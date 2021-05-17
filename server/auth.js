const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const { User } = require('./models/models')

module.exports = (passport) => {
	passport.use(new localStrategy({usernameField: 'email'}, 
	(email, senha, done) => {
		User.findOne({where: {email: email}}).then(user => {
			if (!user){
				return done(null, false)
			}

			bcrypt.compare(senha, user.password, (_error, match) => {
				if (match){
					return done(null, {id: user.id, cpf: user.cpf})
				} else {
					return done(null, false)
				}
			})
		})
	}))

	passport.serializeUser((user, done) => {
		done(null, user.id)
	})

	passport.deserializeUser((id, done) => {
		User.findByPk(id).then((user) => {
			if(!user){
				done(null, false)	
			}
			
			done(null, user)
		})
	})
}