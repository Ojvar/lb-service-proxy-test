import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {RestExpressDataSource} from '../datasources';

export interface RestExpressService {
  test(): Promise<string>;
}

export class RestExpressServiceProvider
  implements Provider<RestExpressService>
{
  constructor(
    // restExpress must match the name property in the datasource json file
    @inject('datasources.restExpress')
    protected dataSource: RestExpressDataSource = new RestExpressDataSource(),
  ) {}

  value(): Promise<RestExpressService> {
    return getService(this.dataSource);
  }
}
