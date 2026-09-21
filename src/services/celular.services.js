import { pool } from '../database/db.js'


class celularServices {
    async getALL(){
        const res = await pool.query('SELECT * FROM celulares');
        return res.rows
    
}

     async createCelular( {nome, marca, preco} ) {
        const res = await pool.query("INSERT INTO celulares (nome, marca, preco) VALUES ($1, $2, $3) RETURNING *", 
            [nome, marca, preco])
        return res.rows[0]
    }
}