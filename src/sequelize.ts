import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': 'postgres',
  'password': '12345678',
  'database': 'postgres',
  'host': 'kgontu-project3-db.cmscx3mpd3ha.us-east-1.rds.amazonaws.com',

  'dialect': config.dialect,
  'storage': ':memory:',
});
