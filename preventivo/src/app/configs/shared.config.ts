import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";



// TRANSLATE
export function HttpLoaderFactory(http: HttpClient) {
    const path = '/assets/i18n/'
    return new TranslateHttpLoader(http,path,'.json');
  }