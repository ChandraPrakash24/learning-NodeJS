const express = require('express');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync('./dummyPostREST.json', 'utf-8'));
const user = users.users; //real array of users

exports. postusers = (req, res) => {
    user.push(req.body);
    res.json(req.body);
}
exports. getuser = (req, res) => {
    res.json(user);
}
exports. getSpecificuser = (req, res) => {
    const specificId = +req.params.id;
    // console.log(id);
    const specificuser = user.find(p=>p.id===specificId);
    res.json(specificuser);
}
exports. putSpecificuser = (req, res) => {
    const specificId = +req.params.id;
    const specificuserIndex = user.findIndex(p=>p.id===specificId);
    user.splice(specificuserIndex, 1, {...req.body, id:specificId});
    res.status(202).json({title:'Upadeted'});
}
exports. patchSpecificuser = (req, res) => {
    const specificId = +req.params.id;
    const specificuserIndex = user.findIndex(p => p.id === specificId);
        const userToPatch = user[specificuserIndex];
        const updateduser = { ...userToPatch, ...req.body };
        user.splice(specificuserIndex, 1, updateduser);
        res.status(202).json({ title: 'Patched' });
}
exports. deleteSpecificuser =  (req, res) => {
    const specificId = +req.params.id;
    const specificuserIndex = user.findIndex(p=>p.id===specificId);
    const userToPatch = user[specificuserIndex];
    user.splice(specificuserIndex, 1,);
    res.status(202).json(userToPatch);
}