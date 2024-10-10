interface ISearchData {
  childs?: ISearchData[]
  title: string
  url?: string
  link?: string
}
const searchPath = (
  catalog: ISearchData[],
  link?: string,
  crumbs: ISearchData[] = [],
): ISearchData[] | undefined => {
  for (const crumb of catalog) {
    if (crumb.url === link || crumb.link === link) {
      return [...crumbs, crumb]
    }
    if (crumb.childs) {
      const foundPath = searchPath(crumb.childs, link, [...crumbs, crumb])
      if (foundPath) {
        return foundPath
      }
    }
  }
}

export default searchPath
