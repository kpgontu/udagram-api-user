export const config = {
  'username': 'postgres',
  'password': '12345678',
  'database': 'postgres',
  'host': 'kgontu-project3-db.cmscx3mpd3ha.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-1',
  'aws_profile': 'default',
  'aws_media_bucket': 'udacity-project3-kg-bucket',
  'url': process.env.URL,
  'jwt': {
    'secret': 'testing',
  },
};
