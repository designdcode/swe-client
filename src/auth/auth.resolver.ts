import axios from 'axios';
import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import https from 'https';
import * as xml2js from 'xml2js';

interface ResponseProps {
  CheckLogin: {
    Result: Array<string>;
    Stno: Array<string>;
  };
}

@ObjectType()
class Auth {
  @Field(() => String)
  id: string;
  @Field(() => String)
  stno: string;
}
@ObjectType({ isAbstract: true })
abstract class AuthReturnType {
  @Field(() => Boolean)
  success: boolean;

  @Field(() => Auth)
  data: Auth;
}

@Resolver(() => AuthReturnType)
export class AuthResolver {
  @Mutation(() => AuthReturnType)
  async userLogin(
    @Args('id') id: string,
    @Args('pwd') pwd: string,
  ): Promise<AuthReturnType> {
    try {
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
      axios.defaults.httpsAgent = httpsAgent;
      const res = await axios.get(
        `https://lily.sunmoon.ac.kr/CheckIDPW_XML.aspx?id=${id}&pw=${pwd}`,
      );
      if (!res) {
        throw new Error('Can not get Login query');
      }
      const cleanObj: ResponseProps = await xml2js.parseStringPromise(res.data);
      if (cleanObj.CheckLogin.Result[0] === 'Y') {
        const data = {
          id: cleanObj.CheckLogin.Result[0],
          stno: cleanObj.CheckLogin.Stno[0],
        };
        return {
          success: true,
          data: data,
        };
      } else {
        throw new Error('로그인 실패');
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
