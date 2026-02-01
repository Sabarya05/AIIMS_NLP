import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ComplaintNLP = sequelize.define(
  'ComplaintNLP',
  {
    complaint_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cleaned_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tokens: {
      type: DataTypes.TEXT, // stored as JSON string
      allowNull: false
    }
  },
  {
    tableName: 'complaint_nlp_results',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  }
);

export default ComplaintNLP;
