import {
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    MangaStream
} from '../MangaStream'

const DOMAIN = 'https://flamecomics.com'

export const FlameComicsInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'FlameComics',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Netsky',
    authorWebsite: 'http://github.com/TheNetsky',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI,
    sourceTags: []
}

export class FlameComics extends MangaStream {

    baseUrl: string = DOMAIN

    override sourceTraversalPathName = 'series'

    override configureSections() {
        this.sections['new_titles'].enabled = false
        this.sections['top_alltime'].enabled = false
        this.sections['top_monthly'].enabled = false
        this.sections['top_weekly'].enabled = false

        this.sections['latest_update'].selectorFunc = ($: CheerioStatic) => $('div.bsx', $('h2:contains(Latest Update)')?.parent()?.next())
        this.sections['latest_update'].subtitleSelectorFunc = ($: CheerioStatic, element: CheerioElement) => $('div.epxs', element).text().trim()
    }
}