const adminUser = process.env.MONGO_ADMIN_USER;
const adminPassword = process.env.MONGO_ADMIN_PASS;

db.auth(adminUser, adminPassword);

const db = db.getSiblingDB('salata-wiet');

db.createCollection('events', {
  capped: true,
  size: 2147483648,
  max: 1000000
});

db.createCollection('users');

db.createCollection('dailyuserlogs', {
  capped: true,
  size: 536870912,
  max: 100000
});

db.createCollection('eventResponses', {
  capped: true,
  size: 2147483648,
  max: 500000
});

db.createCollection('friendrequests');
db.createCollection('attendees');
db.createCollection('folders');
db.createCollection('folderEvents');

const appUser = process.env.MONGO_APP_USER;
const appPassword = process.env.MONGO_APP_PASS;

db.createUser({
  user: appUser,
  pwd: appPassword,
  roles: [{ role: 'readWrite', db: 'salata-wiet' }]
});

console.log('Database "salata-wiet" initialized with capped collections.');
