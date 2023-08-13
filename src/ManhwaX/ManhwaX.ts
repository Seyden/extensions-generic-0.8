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

const MANHWAX_DOMAIN = 'https://manhwax.com'

export const ManhwaXInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'ManhwaX',
    description: 'Extension that pulls manga from ManhwaX',
    author: 'Seyden',
    authorWebsite: 'https://github.com/Seyden',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: MANHWAX_DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: 'Notifications',
            type: BadgeColor.GREEN
        },
        {
            text: '18+',
            type: BadgeColor.YELLOW
        }
    ]
}

export class ManhwaX extends MangaStream {

    baseUrl: string = MANHWAX_DOMAIN

    override configureSections() {
        this.sections['popular_today']!.enabled = false
        this.sections['latest_update']!.selectorFunc = ($: CheerioStatic) => $('div.bsx', $('h2:contains(Latest Update)')?.parent()?.next())
        this.sections['new_titles']!.enabled = false
    }
}