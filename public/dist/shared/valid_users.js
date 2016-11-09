"use strict";
var valid_user_profiles = [
    /* Jason Yu */ "https://www.facebook.com/profile.php?id=1311577170&fref=ts",
    /* Ryan Wong */ "https://www.facebook.com/profile.php?id=692566346&fref=ts",
];
function parseQuery(url) {
    var raw_qs = url.split('?')[1].split('&');
    var qs = raw_qs.map(function (raw_q) { return raw_q.split('='); });
    var querys = {};
    qs.forEach(function (q) { return querys[q[0]] = q[1]; });
    return querys;
}
function extractId(url) {
    return parseQuery(url)['id'];
}
var valid_users = valid_user_profiles.map(extractId);
exports.valid_users = valid_users;
//# sourceMappingURL=valid_users.js.map