import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'restExpress',
  connector: 'rest',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    strictSSL: false,
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'http://localhost:2000/test',
      },
      functions: {
        test: [],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class RestExpressDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'restExpress';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.restExpress', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
