const gravatar = require('gravatar');
const gravatarOption = {s: '200', r: 'pg', d: 'mm'};
const passportAuthenticate = require('passport').authenticate("jwt", {session: false});
module.exports = {
  saltRounds: 10,
  myGmailGravatar: gravatar.url('zdh1207@gmail.com', gravatarOption ),
  myQQGravatar: gravatar.url('gotoseeyou@qq.com', gravatarOption),
  passportAuthenticate
}