import {
  Controller,
  Get,
  Query,
  CacheInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { AutocompleteService } from './autocomplete.service';

@UseInterceptors(CacheInterceptor)
@Controller('autocomplete')
export class AutocompleteController {
  constructor(private autocompleteService: AutocompleteService) {}

  @Get()
  async getQuery(@Query('q') query: string): Promise<Array<string>> {
    return this.autocompleteService.getAutocompleteResult(query);
  }
}
