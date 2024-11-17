import { Sequelize, Model, DataTypes } from 'sequelize';

export class EavAttributeLabel extends Model {}

export const initEavAttributeLabelModel = (sequelize: Sequelize) => {
  EavAttributeLabel.init(
    {
      attribute_label_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      attribute_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EavAttributeLabel',
      tableName: 'eav_attribute_label',
      timestamps: false, // Disable createdAt and updatedAt columns
    }
  );

  return EavAttributeLabel;
};
