'Ruta: /api/tarea';

const { Router } = require('express');
const { tareaAllGet, tareaPost, tareaPut, tareaDelete} = require('../controllers/tarea.controller');

const router = Router();

router.get('/', tareaAllGet);
router.post('/', tareaPost);
router.put('/', tareaPut);
router.delete('/', tareaDelete);

module.exports = router;



