const mongoose = require('mongoose');

const getConnection = async () => {
    try{
        const url = 'mongodb://camivaar:2219kamilo@ac-dwu8yqd-shard-00-00.lco9pnm.mongodb.net:27017,ac-dwu8yqd-shard-00-01.lco9pnm.mongodb.net:27017,ac-dwu8yqd-shard-00-02.lco9pnm.mongodb.net:27017/inventario-test?ssl=true&replicaSet=atlas-125f3r-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(url);

        console.log('conexion exitosa');

    } catch (error){
        console.log(error)
    }

}

module.exports={
    getConnection,
}