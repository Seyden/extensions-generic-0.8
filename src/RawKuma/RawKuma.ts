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

const RAWKUMA_DOMAIN = 'https://rawkuma.com'

export const RawKumaInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'RawKuma',
    description: 'Extension that pulls manga from RawKuma',
    author: 'Seyden',
    authorWebsite: 'https://github.com/Seyden',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: RAWKUMA_DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: [
        {
            text: 'Notifications',
            type: BadgeColor.GREEN
        },
        {
            text: 'Japanese',
            type: BadgeColor.GREY
        }
    ]
}

export class RawKuma extends MangaStream {

    baseUrl: string = RAWKUMA_DOMAIN
    override language: string = '🇯🇵'

}