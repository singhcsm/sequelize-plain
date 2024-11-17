import { Sequelize } from 'sequelize';
import { initEavAttributeLabelModel } from './entities/eav-attribute-label.entity'; // Adjust path as needed

export const initializeModels = (sequelize: Sequelize) => {
  // Initialize models
  const EavAttributeLabel = initEavAttributeLabelModel(sequelize);

  // Add more models here if needed
  const models = { EavAttributeLabel };

  // Setup associations if needed
  Object.values(models).forEach((model) => {

  });

  return models;
};
