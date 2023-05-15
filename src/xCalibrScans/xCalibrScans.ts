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

const XCALIBRSCANS_DOMAIN = 'https://xcalibrscans.com'

export const xCalibrScansInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'xCalibrScans',
    description: 'Extension that pulls manga from xCalibrScans',
    author: 'Seyden',
    authorWebsite: 'https://github.com/Seyden',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: XCALIBRSCANS_DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED,
    sourceTags: [
        {
            text: 'Notifications',
            type: BadgeColor.GREEN
        }
    ]
}

export class xCalibrScans extends MangaStream {

    baseUrl: string = XCALIBRSCANS_DOMAIN

    override configureSections() {
        this.sections['new_titles']!.enabled = false
    }

}