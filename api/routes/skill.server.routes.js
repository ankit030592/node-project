var express = require('express');
var router = express.Router();
var Skills = require('../controllers/skill.server.controllers');

router.post('/', Skills.createSkills);
router.get('/', Skills.getSkills);
router.put('/:skill_id/update', Skills.editSkills);
router.put('/:skill_id/approve', Skills.changeStatus);

module.exports = router;