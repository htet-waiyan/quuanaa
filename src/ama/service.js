/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import amaDao from './schema';
import { randomString } from '../util';

const createAmaPojo = (email, phone, lifetime, context) => {
  const enterCode = randomString().toUpperCase();
  const amaDateTime = moment().unix();
  return {
    email,
    phone,
    enterCode,
    lifetime,
    amaDateTime,
  };
};

export default class AmaService {
  constructor() {
    this.dao = amaDao;
  }

  async createAma(email, phone, lifetime, context) {
    const pojo = createAmaPojo(email, phone, lifetime, context);
    return this.dao.create(pojo);
  }
}
