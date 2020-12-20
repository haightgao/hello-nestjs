import config from './configuration';

const { type, host, port, username, password, database } = config.typeorm.db;
const { synchronize, logging } = config.typeorm;

export const typeOrmConfig = {
  type: type,
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
  synchronize: synchronize,
  logging: logging,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
