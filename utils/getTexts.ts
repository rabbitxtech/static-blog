import GithubSlugger, { slug } from 'github-slugger'

const slugger = new GithubSlugger()

export const getInnerText = (props: any): string => {
    let s = ''
    const getInnerTextFromElement = (obj: any) => {
        if (obj) {
            const type = typeof obj
            if (type === 'string' || type === 'number') {
                s += obj
            }
            else if (type === 'object') {
                if (Array.isArray(obj)) {
                    obj.forEach(function (el) {
                        getInnerTextFromElement(el)
                    })
                }
                else {
                    let props = obj.props;
                    if (props) {
                        getInnerTextFromElement(props.children)
                    }
                }
            }
            return s
        }
        return s
    }
    if (props.children) {
        return getInnerTextFromElement(props.children)
    }
    return s
}

export const removeVietnameseTones = (s: string): string => {
    return s.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")

}

export const getSlugHeading = (s: any): string => {
    // return slugger.slug(removeVietnameseTones(getInnerText(s)))
    return slug(removeVietnameseTones(getInnerText(s)))
}

export const getNormalSlug = (s: string): string => {
    return slug(removeVietnameseTones(s))
}

const getHighlightedText = (text: string) => {
    const textSearch = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const pattern = new RegExp(`${textSearch}`, "gi")
}