const conexao = require('../infraestrutura/conection');
const fileUpload = require('../files/filesUpload')
class Pet{
    add(pet, res){
        fileUpload(pet.image, pet.name,(newPath)=>{
            const sql = 'INSERT INTO pets SET ?'
            const newPet = {name:pet.name, image:newPath}
            conexao.query(sql, newPet, (error, results)=>{
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(newPet);
                }
            })
        })                    
    }

}
module.exports = new Pet;