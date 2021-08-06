// add middlewares here related to actions
const Action = require('./actions-model')

 const validateActionId = (req, res, next) => {
    const id = req.params.id;
    Action.get(id)
      .then(action => {
          if(!action) {
              res.status(404).json({message: `action with id ${id} not found`})
          } else {
              req.action = action
              next()
          }
      })
      .catch(next);
};


    function validateAction (req, res, next) {
        const { notes , description, project_id} = req.body
        if(!notes || !description || !project_id) {
            res.status(400).json({
                message:"Missing fields (notes, or a description)"
            })
        } else {
            next()
        }
    }

    module.exports = {
        validateActionId,
        validateAction,
    }