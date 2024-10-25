
function createUser(db, user, password) {
    const insertUserStatement = db.prepare("INSERT INTO users (user, password) VALUES (?, ?)");
    const hash = crypto.createHash('md5').update(password).digest('hex');
    insertUserStatement.run(user, hash);
};

function readUser(db, user) {
    const getUserStatement = db.prepare("SELECT * FROM users WHERE user = ?");
    return getUserStatement.get(user);
};

function updateUser(db, user, password) {
    const updateUserStatement = db.prepare("UPDATE users SET password = ? WHERE user = ?");
    const hash = crypto.createHash('md5').update(password).digest('hex');
    updateUserStatement.run(hash, user);
};

function deleteUser(db, user) {
    const deleteUserStatement = db.prepare("DELETE FROM users WHERE user = ?");
    deleteUserStatement.run(user);
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
};