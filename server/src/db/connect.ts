import mongoose, { ConnectOptions } from 'mongoose';
import config from '../config/config';

const connect = () => {
  try {
    mongoose.connect(`mongodb://localhost:${config.db.port}/${config.db.name}`,
    { useNewUrlParser: true, useUnifiedTopology: true, } as ConnectOptions );
    console.log('db connected');
  } catch (error) {
    console.error('db error', error);
  }   
};

export default connect;