const functionDir = './functions/';
const register = require(`${functionDir}register`)
const login = require(`${functionDir}login`)
const passport = require(`${functionDir}passport`)
const getProfiles = require(`${functionDir}getProfiles`)
const getProfile = require(`${functionDir}getProfile`)
const addProfile = require(`${functionDir}addProfile`)

module.exports = {login, register, passport, getProfiles, getProfile, addProfile,}