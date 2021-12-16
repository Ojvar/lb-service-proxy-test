// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {get} from '@loopback/rest';
import {RestExpressService} from '../services';

// import {inject} from '@loopback/core';

export class RestExpressController {
  constructor(
    @inject('services.RestExpressService')
    private restExpressService: RestExpressService,
  ) {}

  @get('/test')
  async test() {
    const t = await this.restExpressService.test();
    return 'Remote Response : ' + t;
  }
}
