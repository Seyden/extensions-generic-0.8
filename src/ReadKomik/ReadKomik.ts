/* eslint-disable linebreak-style */
import {
    BadgeColor,
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    MangaStream
} from '../MangaStream'

const READKOMIK_DOMAIN = 'https://readkomik.com'

export const ReadKomikInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'ReadKomik',
    description: 'Extension that pulls manga from ReadKomik',
    author: 'Seyden',
    authorWebsite: 'https://github.com/Seyden',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: READKOMIK_DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: 'Notifications',
            type: BadgeColor.GREEN
        }
    ]
}

export class ReadKomik extends MangaStream {

    baseUrl: string = READKOMIK_DOMAIN

    override configureSections() {
        this.sections['new_titles']!.enabled = false
    }
}