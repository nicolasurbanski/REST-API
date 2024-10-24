import {connect} from "mongoose";

async function main(){
    await connect(process.env.MONGO_URI);
}
main()
.then(() => console.log("MongoDB Connected on local enviroment"))
.catch(err => console.log(`Database Connection failed: ${err.message}`))



