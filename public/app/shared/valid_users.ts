const valid_user_profiles = [
  /* Jason Yu */ "https://www.facebook.com/profile.php?id=1311577170&fref=ts",
  /* Ryan Wong */ "https://www.facebook.com/profile.php?id=692566346&fref=ts",
];

function parseQuery(url){
  let raw_qs = url.split('?')[1].split('&'); 
  let qs = raw_qs.map((raw_q) => raw_q.split('='));
  let querys = {};
  qs.forEach((q) => querys[q[0]]=q[1]);
  return querys;
}

function extractId(url){
  return parseQuery(url)['id'];
}

let valid_users = valid_user_profiles.map(extractId);

export { valid_users };
