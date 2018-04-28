/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import '@app/framework/angular/http/http-extensions';

import { ApiUrlConfig, HTTP } from '@app/framework';

export class LanguageDto {
    constructor(
        public readonly iso2Code: string,
        public readonly englishName: string
    ) {
    }
}

@Injectable()
export class LanguagesService {
    constructor(
        private readonly http: HttpClient,
        private readonly apiUrl: ApiUrlConfig
    ) {
    }

    public getLanguages(): Observable<LanguageDto[]> {
        const url = this.apiUrl.buildUrl('api/languages');

        return HTTP.getVersioned<any>(this.http, url)
                .map(response => {
                    const body = response.payload.body;

                    const items: any[] = body;

                    return items.map(item => {
                        return new LanguageDto(
                            item.iso2Code,
                            item.englishName);
                    });
                })
                .pretifyError('Failed to load languages. Please reload.');
    }
}