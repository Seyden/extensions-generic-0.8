import {
    Chapter,
    ChapterDetails,
    HomeSection,
    LanguageCode,
    Manga,
    MangaTile,
    MangaUpdates,
    PagedResults,
    SearchRequest,
    Source,
    Tag,
    TagSection,
    Request,
    Response
} from 'paperback-extensions-common'
export function getIncludedTagBySection(section: string, tags: Tag[]): any {
    return (tags?.find((x: Tag) => x.id.startsWith(`${section}:`))?.id.replace(`${section}:`, '') ?? '').replace(' ', '+')
}

export function getFilterTagsBySection(section: string, tags: Tag[], included: boolean, supportsExclusion: boolean = false): string[] {
    if (!included && !supportsExclusion) {
        return []
    }

    return tags?.filter((x: Tag) => x.id.startsWith(`${section}:`)).map((x: Tag) => {
        let id: string = x.id.replace(`${section}:`, '')
        if (!included) {
            id = `-${id}`
        }
        return id
    })
}