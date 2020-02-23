const functionDir = './functions/';
const register = require(`${functionDir}register`);
const login = require(`${functionDir}login`);
const passport = require(`${functionDir}passport`);
const getProfiles = require(`${functionDir}getProfiles`);
const getProfile = require(`${functionDir}getProfile`);
const addProfile = require(`${functionDir}addProfile`);
const editProfile = require(`${functionDir}editProfile`);
const deleteProfile = require(`${functionDir}deleteProfile`);

module.exports = {
  login, register, passport, getProfiles, getProfile, addProfile,
  editProfile, deleteProfile
}