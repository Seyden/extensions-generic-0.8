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

const REALMSCANS_DOMAIN = 'https://realmscans.com'

export const RealmScansInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'RealmScans',
    description: 'Extension that pulls manga from RealmScans',
    author: 'Seyden',
    authorWebsite: 'http://github.com/Seyden',
    icon: 'icon.webp',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: REALMSCANS_DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: 'Notifications',
            type: BadgeColor.GREEN
        }
    ]
}

export class RealmScans extends MangaStream {

    baseUrl: string = REALMSCANS_DOMAIN

    override sourceTraversalPathName = 'series'

    override configureSections(): void {
        this.sections['new_titles']!.enabled = false
    }

}