function getObj(type, value) {
    return {type, value}
}

export function setTitle(title) {
    return getObj("title", title)
}

export function setDescription(description) {
    return getObj("description", description)
}

export function setImagePreview(imagePreview) {
    return getObj("imagePreview", imagePreview)
}

export function setAudio(audio) {
    return getObj("audio", audio)
}

export function setAdultContent(adultContent) {
    return getObj("adultContent", adultContent)
}

export function setExcludeFromExport(exclude) {
    return getObj("excludeFromExport", exclude)
}

export function setHasTrailer(hasTrailer) {
    return getObj("trailer", hasTrailer)
}

export function setAccess(access) {
    return getObj("access", access)
}