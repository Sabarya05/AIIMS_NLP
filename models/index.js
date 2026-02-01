import sequelize from '../config/database.js';
import ComplaintNLP from './ComplaintNLP.js';

export const initDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected & tables synced');
  } catch (err) {
    console.error('DB error:', err);
  }
};

export { ComplaintNLP };
