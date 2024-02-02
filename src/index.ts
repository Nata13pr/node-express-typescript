import express, { Express, NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import {MONGOURI,PORT} from './constants/constant'

import authRouter from './routes/auth.router';

dotenv.config({path:path.join(process.cwd(),'src','environments','${process.env.MODE}.env'),});

connect( MONGOURI );

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

app.listen( PORT, () => {
  console.log( 'Server is Fire at 7000' );
} );


