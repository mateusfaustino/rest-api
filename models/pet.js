const conexao =require('../infraestrutura/conection');
class Pet{
    add(pet, res){
        const sql = 'INSERT INTO pets SET ?'
        conexao.query(sql, pet, (error, results)=>{
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(pet);
            }
        })            
    }

}
module.exports = new Pet;