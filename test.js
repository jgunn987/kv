const level = require('level');
const db = level('./test-db');

db.put('role:Administrator', '*');
db.put('role:Inspector', 'read*');
db.put('role:Trust Manager', 'read*');
db.put('role:MDT', 'read*');
db.put('role:Patient', 'readLeaveLog');
db.put('user:NHSNO1', '{ metadata: {} }');
db.put('user:NHSNO2', '{ metadata: {} }');
db.put('user:NHSNO3', '{ metadata: {} }');
db.put('user:NHSNO4', '{ metadata: {} }');
db.put('user:NHSNO5', '{ metadata: {} }');
db.put('#user:NHSNO5/leaveContract:1');
db.put('#user:NHSNO5/leaveContract:2');
db.put('#user:NHSNO5/leaveContract:3');
db.put('#user:NHSNO5/leaveContract:4');
db.put('#user:NHSNO5/leaveLog:1');
db.put('#user:NHSNO5/leaveLog:2');
db.put('#user:NHSNO5/leaveLog:3');
db.put('#user:NHSNO5/leaveLog:4');
db.put('#user:NHSNO5/leaveLog:5');
db.put('#user:NHSNO5/leaveLog:6');
db.put('#user:NHSNO5/leaveLog:7');
db.put('#user:NHSNO5/leaveLog:8');
db.put('#user:NHSNO5/leaveLog:9');
db.put('leaveLog:1', '{ metadata: {} }');
db.put('leaveLog:2', '{ metadata: {} }');
db.put('leaveLog:3', '{ metadata: {} }');
db.put('leaveLog:4', '{ metadata: {} }');
db.put('leaveLog:5', '{ metadata: {} }');
db.put('leaveLog:6', '{ metadata: {} }');
db.put('leaveLog:7', '{ metadata: {} }');
db.put('leaveLog:8', '{ metadata: {} }');
db.put('leaveLog:9', '{ metadata: {} }');

db.put('root:alibi', '{ metadata: {} }');
db.put('#root:alibi/member:NHSNO1', 'Administrator');
db.put('#root:alibi/member:NHSNO2', 'Administrator');
db.put('#root:alibi/member:NHSNO3', 'Administrator');
db.put('#root:alibi/member:NHSNO4', 'Administrator');
db.put('#root:alibi/member:NHSNO5', 'Administrator');
db.put('@root:alibi/organisation:nhs');

db.put('organisation:nhs', '{ metadata: {} }');
db.put('#organisation:nhs/member:1', 'Inspector');
db.put('#organisation:nhs/member:2', 'Inspector');
db.put('#organisation:nhs/member:3', 'Inspector');
db.put('@organisation:nhs/trust:1');
db.put('@organisation:nhs/trust:2');

db.put('trust:1', '{ metadata: {} }');
db.put('#trust:1/member:1', 'Trust Manager');
db.put('#trust:1/member:2', 'Secretary');
db.put('#trust:1/member:3', 'MDT');
db.put('#trust:1/member:4', 'MDT');
db.put('#trust:1/member:5', 'MDT');
db.put('@trust:1/ward:1');

db.put('ward:1', '{ metadata: {} }');
db.put('#ward:1/member:1', 'Ward Manager');
db.put('#ward:1/member:2', 'MDT');
db.put('#ward:1/member:3', 'MDT');
db.put('#ward:1/member:4', 'Patient');

db.put('trust:2', '{ metadata: {} }');
db.put('#trust:2/member:1', 'Trust Manager');
db.put('#trust:2/member:2', 'Secretary');
db.put('#trust:2/member:3', 'MDT');
db.put('#trust:2/member:4', 'MDT');
db.put('#trust:2/member:5', 'MDT');
db.put('@trust:2/ward:9');

db.put('ward:9', '{ metadata: {} }');
db.put('#ward:9/member:1', 'Ward Manager');
db.put('#ward:9/member:2', 'MDT');
db.put('#ward:9/member:3', 'MDT');
db.put('#ward:9/member:4', 'Patient');
db.put('#ward:9/member:NHSNO2', 'Patient');

function indexKey(a, b) {
  return '#' + a + '/' + b;
}

function linkKey(a, b) {
  return '@' + a + '/' + b;
}

function createLink(a, b, bi) {
  return db.put(linkKey(a, b)).then(function (r) {
    return bi ? db.put(linkKey(b, a)) : r;
  });
}

function checkResourceLink(a, b) {
  return db.get(linkKey(a, b)); 
}

function checkResourceLinks(resources) {
  return Promise.all(resources.map(function (c, i, a) {
    return i > 0 ? checkResourceLink(a[i-1], c) : ''; 
  }));
}

function getMembership(uid, resource) {
  return db.get(indexKey(resource, 'member:' + uid))
    .catch(function () { return undefined; });
}

function getMemberships(uid, resources) {
  return Promise.all(resources.map(function (p) {
    return getMembership(uid, p);
  })).then(function (roles) {
    return roles.filter(Boolean);
  }).then(function (roles) {
    return Promise.all(roles.map(function (role) {
      return db.get('role:' + role);
    }));
  });
}

function getRoles(uid, resource) {
  const parts = ['root:alibi'].concat(resource.split('/'));
  return checkResourceLinks(parts)
    .then(function () {
      return getMemberships(uid, parts);
    }).catch(function () {
      throw new Error('Invalid Resource');   
    });
}

function getLeaveLogs(uid) {
  var ops = [];
  db.createReadStream({
    gte: '#user:' + uid + '/leaveLog',
    lte: '#user:' + uid + '/leaveLog~'
  }).on('data', function (data) {
    ops.push(db.get(data.key.split('/')[1]));
  }).on('end', function () {
    Promise.all(ops).then(function (r) {
      console.log(r);    
    });
  });
}

getRoles('NHSNO2', 'organisation:nhs/trust:2/ward:9')
  .then(console.log);
getRoles('NHSNO2', 'iorganisation:nhs/trust:2/ward:9')
  .catch(console.log);
getRoles('NHSNO1', 'organisation:nhs')
  .then(console.log);
getLeaveLogs('NHSNO5')

