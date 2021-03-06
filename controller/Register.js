
async function Register (req,res){

    // taking one connection from pool
    db = global.supabase
    
    const loginCredentials = JSON.parse(req.query[0])
    let data 
    try{
        var user = await supabase.from('users').insert(
            {
                email: loginCredentials.email,
                first_name: loginCredentials.fname,
                last_name: loginCredentials.lname,
                password: loginCredentials.password,
            }
        );
        console.log(user)
    }
    catch(err){
        console.log(err)
        data = {'success':false}
    }
        
    if(user.data.length>0){
        data = {...user.data[0],'success':true}
       console.log(data)
    }else{
        data = {'success':false}
    }
    console.log(data)
    res.send(data)

}

module.exports=Register