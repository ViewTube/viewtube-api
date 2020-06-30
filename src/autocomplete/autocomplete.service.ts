import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { stringify } from 'querystring';

@Injectable()
export class AutocompleteService {
  private url =
    'https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

  private responseRegex = new RegExp(/(window\.google\.ac\.h\()(.*)(\))/);

  async getAutocompleteResult(query: string): Promise<Array<string>> {
    const data: string = (await axios.get(this.url + query)).data;
    const array: Array<any> = JSON.parse(data.match(this.responseRegex)[2]);
    return array[1].map((e: any) => e[0]);
  }
}
