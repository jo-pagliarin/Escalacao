function createDatabase (nome){
    const query = `CREATE DATABASE ${nome}`
    banco.query(query, function(err, result){
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
}