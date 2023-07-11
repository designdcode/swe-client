import axios from 'axios';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Auth } from './entities/auth.entity';
import https from 'https';
import * as xml2js from 'xml2js';

interface ResponseProps {
  CheckLogin: {
    Result: Array<string>;
    Stno: Array<string>;
  };
}

@Resolver(() => Auth)
export class AuthResolver {
  @Mutation(() => Auth)
  async userLogin(@Args('id') id: string, @Args('pwd') pwd: string) {
    try {
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
      axios.defaults.httpsAgent = httpsAgent;
      const res = await axios.get(
        `https://lily.sunmoon.ac.kr/CheckIDPW_XML.aspx?id=${id}&pw=${pwd}`,
      );
      if (!res) {
        return {
          success: false,
          error: 'Can not get Login query',
          data: null,
        };
      }
      const cleanObj: ResponseProps = await xml2js.parseStringPromise(res.data);
      if (cleanObj.CheckLogin.Result[0] === 'Y') {
        const data = {
          id: cleanObj.CheckLogin.Result[0],
          stno: cleanObj.CheckLogin.Stno[0],
        };
        return {
          success: true,
          error: null,
          data: data,
        };
      } else {
        return {
          success: false,
          error: '로그인 실패',
          data: null,
        };
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
