const User = require("./user");
const path = require('path'); //modulo para manipular caminhos
const fs = require('fs'); //modulo para manipular arquivos file system
const bcrypt = require('bcryptjs'); //modulo para criptografar senha
const mysql = require("./mysql")//Importando funções de conexão com o MySQL

class userService {
 
    async addUser(nome, email, senha, endereco, telefone, cpf) { //função para adicionar usuario
        try {
            const senhaCripto = await bcrypt.hash(senha, 10);

            const resultados = await mysql.execute(
                `INSERT INTO usuário (nome, email, senha, endereço, telefone, cpf)
	                    VALUES ( ?, ?, ?, ?, ?, ?);`,
                        [nome, email, senhaCripto, endereco, telefone, cpf]
        );
            return resultados

    }
    catch (erro) {
            console.log('Erro ao adicionar usuario', erro);
            throw erro;
        }
    }

    async getUsers() { //função para buscar usuarios
        try {
            const resultado = await mysql.execute(
                `SELECT idusuário FROM usuário WHERE id = ?`,
                [id] 
            ); 
            console.log("resultado", resultado);
            return resultado;
        } catch (erro) {
            console.log('Erro ao buscar usuarios', erro);
        }
    }

    async deleteUser(id) {
        try {
          const user = await this. getUser(id);
          if(user.length == 0){
            console.log ("usuário não encontrado");
            return;
          }
          const resultado = await mysql.execute(
            `DELETE FROM usuário WHERE idusuário = ?`,
            [id]
          );
          return resultado
        } catch (erro) {
            console.log('Erro ao deletar usuario', erro);
        }
    }

    async updateUser(id, nome, email, endereco, senha, telefone, cpf) {
        try {
            const senhaCripto = await bcrypt.hash(senha, 10);
            const resultados = await mysql.execute(
                `UPDATE usuário SET
                Nome = ?,
                Email = ?,
                Senha = ?,
                Endereço = ?,
                Telefone = ?,
                Cpf = ?
                WHERE IdUsuário = ?;`,
        
        );
            return resultados;
        } catch (erro) {
            console.log('Erro ao atualizar usuario', erro);
            throw erro;
        }
    }
}



module.exports = new userService;