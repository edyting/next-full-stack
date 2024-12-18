import mongoose from "mongoose";


const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!); // ! is used to tell typescript that this url will resolve
        const connection = mongoose.connection;
        connection.on('connect', () => {
            console.log('MongoDB connected....')
        });
        connection.on('error', (err) => {
            console.log("Please make sure MongoDB is Running" + err);
            process.exit();
        })

       
    } catch (error) {
        console.log("Ooops, Something went wrong");
        console.log(error); 
    }
};

export default connect;