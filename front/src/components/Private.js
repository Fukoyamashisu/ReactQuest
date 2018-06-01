

    const auth = (ctx) => {
        const token = localStorage.getItem('token');
        if(token){
            fetch("/profile", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            })
            .then(res => res.json())
            .then(
                res => ctx.setState({user:res.user}) ,
                err => console.log(err)
            )
        }
    }

    const checkUser = (ctx,{history}) => {
        const user = localStorage.getItem('user');
        if(user) auth(ctx);
        else history.push("/signin", {flash: "Vous devez vous authentifier"})
    }


export default checkUser;