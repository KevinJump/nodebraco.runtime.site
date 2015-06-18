var express = require('express');
var router = express.Router();

var runtimeProvider = require('../providers/runtimeProvider')
                        .runtimeProvider;

var runtime = new runtimeProvider();

router.get('*', function(req, res, next)
{
  console.log('> Routing: ' + req.path);
  var node = runtime.GetByUrl(req.path, function(err, node)
  {
    if (err)
    {
      res.status(404)
          .send('Not found');
    }
    else
    {
      console.log('> Rendering: ' + req.path);
      res.render(node.Template, {currentPage: node.Content});
    }
  });
});

module.exports = router;
