import express = require( 'express' );

// Create a new express application instance
const app: express.Application = express();

app.use( express.json() );

app.use( express.static( 'dist/frontend' ) )

app.get('/api/*', ( req, res ) => {
	// const resp = data.response( req.url, { method:'GET' } )
	// console.info( 'GET: ', resp );
	// if ( typeof resp == 'number' ){
	// 	res.sendStatus( resp );
	// }
	// res.send(resp);
});


app.post('/api/*', ( req, res )=>{
	// console.info( 'POST: ', req.body );
	// const resp = data.response( req.url, {
	// 	method:'POST',
	// 	body: JSON.stringify(req.body)
 	// })
  // res.send(resp);
});

app.delete('/api/*', ( req, res )=>{
	// const resp = data.response( req.url, { method:'DELETE' } )
	// console.info( 'DELETE: ', resp );
	// res.send(resp);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.info('Rest server listening on port ' + PORT );
});
