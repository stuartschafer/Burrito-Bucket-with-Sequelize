module.exports = function(sequelize, DataTypes) {
	var BurritoBucket = sequelize.define("BurritoBucket", {
		goal: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [1, 500]
		}
		},
		short: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
		},
		longer: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
		},
		bucket: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
		},
		complete: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
		}
	});
	return BurritoBucket;

};