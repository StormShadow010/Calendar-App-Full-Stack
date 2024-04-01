
export const createUser = (req, res) => {



    res.json({
        ok: true,
        msg: "register"
    })
}

export const loginUser = (req, res) => {
    res.json({
        ok: true,
        msg: "Login"
    })
}

export const reToken = (req, res) => {
    res.json({
        ok: true,
        msg: "renew"
    })
}