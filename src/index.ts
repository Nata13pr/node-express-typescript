import authRouter from './routes/auth.router';
import express, { Express, NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';



const mongoURI: string = 'mongodb://127.0.0.1:27017/camp';

connect( mongoURI );

const app: Express = express();


app.use( express.json() );
app.use( express.urlencoded( { extended : true } ) );

app.use( '/api/user', authRouter );


app.use( '*', ( req: Request, res: Response, next: NextFunction ) => {
  res.status( 404 ).json( 'Route not found' );
} );

app.use( ( err: any, rea: Request, res: Response, next: NextFunction ) => {
  res
    .status( err.status || 500 )
    .json( {
      error : err.message || 'Unknown Error',
      code : err.status || 500
    } );
} );

app.listen( 7000, () => {
  console.log( 'Server is Fire at 7000' );
} );


