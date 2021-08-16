const { Op } = require("sequelize");
const User = require('./databases/userModel');
const database = require('./databases');

(async() => {
  // init db
  await database.sync();

  // insert db
  await User.create({
    name: 'Alice',
    email: 'alice@gmail.com',
    address: 'haiphong'
  });

  await User.create({
    name: 'Bob',
    email: 'bob@gmail.com',
    address: 'vietnam'
  });

  await User.create({
    name: 'Jane',
    email: 'jane@gmail.com',
    address: 'hanoi'
  });

  // get list
  const results = await User.findAndCountAll({
    attributes: ['id', 'email'],
    where: {
      id: {
        [Op.gte]: 2
      }
    },
    limit: 2,
    offset: 0
  });

  console.log(results);

  // find one
  const aliceInfo = await User.findOne({
    where: {
      email: 'alice@gmail.com'
    }
  });

  console.log(aliceInfo.toJSON());

  // update
  aliceInfo.address = 'haiduong';
  await aliceInfo.save();

  await aliceInfo.reload();
  console.log(aliceInfo.toJSON());

  await User.update({
    age: 18
  }, {
    where: {
      email: 'bob@gmail.com'
    },
  });

  // delete
  await User.destroy({
    where: {
      id: 3,
    }
  });
})();