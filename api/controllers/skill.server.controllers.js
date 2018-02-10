var Sequelize = require('sequelize');
var db = require('../../db/db');

var Skills = db.import('../../models/skills');

//Create skill
exports.createSkills = (req, res) => {
    if (!req.body.name) {
        return res.status(403).send({
            error: 'Skill name is required'
        });
    }
    let skillsObj = {
        name: req.body.name,
        status: req.body.status
    };
    Skills.create(skillsObj).then(data => {
        return res.status(200).send('Skill created!');
    }).catch(err => {
        return res.status(500).send({
            error: 'Internal server error'
        });

    });
}

//get all skills
exports.getSkills = (req, res) => {
    let whereCl = {};
    if (req.query.searchText) {
       whereCl.name= {
            like: '%' + req.query.searchText + '%'
        };
    }
    console.log(whereCl);
    Skills.findAll({
        attributes: ['id', 'name', 'status'],
        where: whereCl
    }).then(function(data) {
        return res.send(data);
    }).catch(function(err) {
        console.log(err);
        return res.send(err);
    });
}

//Edit skills
exports.editSkills = (req, res) => {
    if (!req.body.name) {
        return res.status(403).send({
            error: 'Skill name is required'
        });
    }

    if (!req.params.skill_id) {
        return res.status(403).send({
            error: 'Skill id is required'
        });
    }

    let name = req.body.name;
    let skill_id = req.params.skill_id;

    Skills.find({
        where: {
            id: skill_id
        }
    }).then(skillInst => {
        return skillInst.update({
            name: name,
            updated: new Date()
        })
    }).then(updatedSkill => {
        return updatedSkill.get();
    }).then(updatedData => {
        return res.status(200).send(updatedData);
    }).catch(err => {
        console.log(err);
        return res.status(500).send({
            error: 'Internal server err'
        });
    })
}

//change skill status
exports.changeStatus = (req, res) => {
    if (!req.body.status) {
        return res.status(403).send({
            error: 'Skill status is required'
        });
    }

    if (!req.params.skill_id) {
        return res.status(403).send({
            error: 'Skill id is required'
        });
        s
    }

    let status = req.body.status;
    let skill_id = req.params.skill_id;

    Skills.find({
        where: {
            id: skill_id
        }
    }).then(skillInst => {
        return skillInst.update({
            status: status
        })
    }).then(updatedStatus => {
        return updatedStatus.get();
    }).then(updatedData => {
        return res.status(200).send(updatedData);
    }).catch(err => {
        console.log(err);
        return res.status(500).send({
            error: 'Internal server error'
        });
    })
}