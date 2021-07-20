class Tables{
    init(conexao){
         this.conexao=conexao;
         this.createAtendimentos();
         this.createPets();
    }
    handleError(error){
        console.log("error-------------------------------");
        console.log(error);
        console.log("-------------------------------error");
    }
    createAtendimentos(){
        const sql = `
            CREATE TABLE IF NOT EXISTS atendimentos (
                id int NOT NULL AUTO_INCREMENT, 
                cliente varchar(50) NOT NULL, 
                pet varchar(20), 
                servico varchar(20) NOT NULL, 
                data datetime NOT NULL, 
                dataCriacao datetime NOT NULL, 
                status varchar(20) NOT NULL, 
                observacoes text, 
                PRIMARY KEY(id)
            )
        
        `
        this.conexao.query(sql, (error)=>{
            if (error) {
              this.handleError(error)  
            } else {
                console.log('Tabela atendimentos criada com sucesso');
            }
        })
    }
    createPets(){
        const sql = `
            CREATE TABLE IF NOT EXISTS pets (
                id int NOT NULL AUTO_INCREMENT, 
                name varchar(50), 
                image varchar(200), 
                PRIMARY KEY(id)
            )
        
        `
        this.conexao.query(sql,(error)=>{
            if(error){
                this.handleError(error)
            }else{
                console.log('Tabela pets criada com sucesso');
            }
        })
    }
}

module.exports = new Tables;