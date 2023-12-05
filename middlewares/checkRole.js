
const checkRole = (...admittedRoles) => (req, res, next) => {

    const { role } = req.payload

    if (admittedRoles.includes(role)) {
        next()
    } else {
        res.redirect('/inicio-sesion')
    }
}

module.exports = { checkRole }