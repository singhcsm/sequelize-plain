import { Sequelize } from 'sequelize';
import { initEavAttributeLabelModel } from '../models'; // Centralized model initialization

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(process.env.DB_URI, {
        dialect: 'mysql',
        logging: console.log, // Enable for debugging; disable in production
      });

      // Initialize all models
      initEavAttributeLabelModel(sequelize);

      // Test the connection
      try {
        await sequelize.authenticate();
        console.log('Database connected successfully!!');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
      }

      return sequelize;
    },
  },
];
