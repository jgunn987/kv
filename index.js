const level = require('level');
const db = level('./test-db', {
  valueEncoding: 'json' 
});

db.put('@organisation/count', 1);
db.put('@trust/count', 1);
db.put('@ward/count', 1);
db.put('@user/count', 11);
db.put('user:1', {});
db.put('user:2', {});
db.put('user:3', {});
db.put('user:4', {});
db.put('user:5', {});
db.put('user:6', {});
db.put('user:NHSNO1', {});
db.put('user:NHSNO2', {});
db.put('user:NHSNO3', {});
db.put('user:NHSNO4', {});
db.put('user:NHSNO5', {
  policies: [{
    role: 'Administrator',
    grant: ['*'],
    ns: '*'
  }]
});
db.put('@user:NHSNO5/root:alibi', 'root:alibi');
db.put('@user:NHSNO5/organisation/count', 1);
db.put('@user:NHSNO5/organisation:1', 'organisation:1');
db.put('@user:NHSNO5/trust/count', 1);
db.put('@user:NHSNO5/trust:1', 'trust:1');
db.put('@user:NHSNO5/ward/count', 4);
db.put('@user:NHSNO5/ward:1', 'ward:1');
db.put('@user:NHSNO5/ward:2', 'ward:2');
db.put('@user:NHSNO5/ward:3', 'ward:3');
db.put('@user:NHSNO5/ward:4', 'ward:4');
db.put('@user:NHSNO5/leaveContract/count', 4);
db.put('@user:NHSNO5/leaveContract:1', 'leaveContract:1');
db.put('@user:NHSNO5/leaveContract:2', 'leaveContract:2');
db.put('@user:NHSNO5/leaveContract:3', 'leaveContract:3');
db.put('@user:NHSNO5/leaveContract:4', 'leaveContract:4');
db.put('@user:NHSNO5/leaveLog/count', 9);
db.put('@user:NHSNO5/leaveLog:1', 'leaveLog:1');
db.put('@user:NHSNO5/leaveLog:2', 'leaveLog:2');
db.put('@user:NHSNO5/leaveLog:3', 'leaveLog:3');
db.put('@user:NHSNO5/leaveLog:4', 'leaveLog:4');
db.put('@user:NHSNO5/leaveLog:5', 'leaveLog:5');
db.put('@user:NHSNO5/leaveLog:6', 'leaveLog:6');
db.put('@user:NHSNO5/leaveLog:7', 'leaveLog:7');
db.put('@user:NHSNO5/leaveLog:8', 'leaveLog:8');
db.put('@user:NHSNO5/leaveLog:9', 'leaveLog:9');
db.put('leaveLog/count', 9);
db.put('leaveLog:1', {});
db.put('@leaveLog:1/namespace', 'root:alibi/organisation:nhs/trust:1/ward:1/user:NHSNO1');
db.put('leaveLog:2', {});
db.put('@leaveLog:2/namespace', 'root:alibi/organisation:nhs/trust:1/ward:1/user:NHSNO1');
db.put('leaveLog:3', {});
db.put('@leaveLog:3/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');
db.put('leaveLog:4', {});
db.put('@leaveLog:4/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');
db.put('leaveLog:5', {});
db.put('@leaveLog:5/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');
db.put('leaveLog:6', {});
db.put('@leaveLog:6/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');
db.put('leaveLog:7', {});
db.put('@leaveLog:7/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');
db.put('leaveLog:8', {});
db.put('@leaveLog:8/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');
db.put('leaveLog:9', {});
db.put('@leaveLog:9/namespace', 'root:alibi/organisation:nhs/trust:2/ward:2/user:NHSNO1');

db.put('root:alibi', {});
db.put('@root:alibi/namespace', '');
db.put('@root:alibi/organisation/count', 1);
db.put('@root:alibi/organisation:nhs', 'organisation:nhs');
db.put('@root:alibi/user/count', 5);
db.put('@root:alibi/user:NHSNO1', 'user:NHSNO1');
db.put('@root:alibi/user:NHSNO2', 'user:NHSNO2');
db.put('@root:alibi/user:NHSNO3', 'user:NHSNO3');
db.put('@root:alibi/user:NHSNO4', 'user:NHSNO4');
db.put('@root:alibi/user:NHSNO5', 'user:NHSNO5');
db.put('!root:alibi/createLeaveContract', [{
  entity: 'user:NHSNO5'
}]);
db.put('!root:alibi/signOut', [{
  entity: 'user:NHSNO5'
}]);
db.put('!root:alibi/signIn', [{
  entity: 'user:NHSNO5'
}]);

db.put('organisation:nhs', {});
db.put('@trust:2/namespace', 'root:alibi');
db.put('@organisation:nhs/trust/count', 2);
db.put('@organisation:nhs/trust:1', 'trust:1');
db.put('@organisation:nhs/trust:2', 'trust:2');
db.put('@organisation:nhs/user/count', 3);
db.put('@organisation:nhs/user:1', 'user:1');
db.put('@organisation:nhs/user:2', 'user:2');
db.put('@organisation:nhs/user:3', 'user:3');
db.put('!organisation:nhs/createLeaveContract', [{
  entity: 'user:NHSNO5'
}]);

db.put('trust:1', {});
db.put('@trust:2/namespace', 'root:alibi/organisation:nhs');
db.put('@trust:1/ward/count', 1);
db.put('@trust:1/ward:1', 'ward:1');
db.put('@trust:1/user/count', 5);
db.put('@trust:1/user:1', 'user:1');
db.put('@trust:1/user:2', 'user:2');
db.put('@trust:1/user:3', 'user:3');
db.put('@trust:1/user:4', 'user:4');
db.put('@trust:1/user:5', 'user:5');
db.put('!trust:1/createLeaveContract', [{
  entity: 'user:NHSNO5'
}]);
db.put('!trust:1/signOut', [{
  entity: 'user:NHSNO6'
}]);
db.put('!trust:1/signIn', [{
  entity: 'user:NHSNO6'
}]);

db.put('ward:1', {});
db.put('@ward:1/namespace', 'root:alibi/organisation:nhs/trust:1');
db.put('@ward:1/user/count', 4);
db.put('@ward:1/user:1', 'user:1');
db.put('@ward:1/user:2', 'user:2');
db.put('@ward:1/user:3', 'user:3');
db.put('@ward:1/user:4', 'user:4');
db.put('!ward:1/createLeaveContract', [{
  entity: 'user:NHSNO777'
}]);

db.put('trust:2', {});
db.put('@trust:2/namespace', 'root:alibi/organisation:nhs');
db.put('@trust:2/ward/count', 1);
db.put('@trust:2/ward:9', 'ward:9');
db.put('@trust:2/user/count', 5);
db.put('@trust:2/user:1', 'user:1');
db.put('@trust:2/user:2', 'user:2');
db.put('@trust:2/user:3', 'user:3');
db.put('@trust:2/user:4', 'user:4');
db.put('@trust:2/user:5', 'user:5');

db.put('ward:9', {});
db.put('@ward:9/namespace', 'root:alibi/organisation:nhs/trust:2');
db.put('@ward:9/user/count', 4);
db.put('@ward:9/user:1', 'user:1');
db.put('@ward:9/user:2', 'user:2');
db.put('@ward:9/user:3', 'user:3');
db.put('@ward:9/user:4', 'user:4');
db.put('@ward:9/user:NHSNO2', 'user:NHSNO2');

function triggerEvent(e) {
  return Promise.all(e.namespace.split('/')
    .map(function (r) {
      return db.get('!' + r + '/' + e.type)
        .catch(() => undefined)
        .then((handlers) => { 
          if(handlers) console.log(handlers)
        });
    }));
}

function hasAccess(policy, entity) {
  return db.get('@' + entity + '/namespace')
    .then(function (ns) {
      return new RegExp('^' +
        policy.namespace.replace(/[*]/g, '.*')
      + '$').test(ns);
    }).catch(function () {
      return false;
    });
}

function getUsersByTrust(id, offset, limit) {
  if(limit > 255) {
    throw new Error('Query limit exceeded');
  }
  return scanIndex({
    gt: offset || '@trust:' + id + '/user:',
    lt: '@trust:' + id + '/user:~', 
    limit: limit || -1
  });
}

function getLeaveLogsByUser(id, offset, limit) {
  if(limit > 255) {
    throw new Error('Query limit exceeded');
  }
  return scanIndex({
    gt: offset || '@user:' + id + '/leaveLog:',
    lt: '@user:' + id + '/leaveLog:~', 
    limit: limit || -1
  });
}

function scanIndex(query) {
  return new Promise((resolve, reject) => {
    let offset = '';
    let records = [];
    db.createReadStream(query).on('data', function (data) {
      offset = data.key;
      records.push(db.get(data.value));
    }).on('end', function () {
      Promise.all(records).then((records) =>
        resolve({ offset, records }));
    });
  });
}

hasAccess({
  namespace: 'root:alibi/organisation:nhs/trust:2' 
}, 'ward:9').then(console.log);

triggerEvent({
  namespace: 'root:alibi/organisation:nhs/trust:1',
  type: 'signOut'
});

triggerEvent({
  namespace: 'root:alibi/organisation:nhs/trust:1/ward:1',
  type: 'createLeaveContract'
});

getLeaveLogsByUser('NHSNO5', null, 2).then(console.log);
getUsersByTrust('1').then(console.log);

