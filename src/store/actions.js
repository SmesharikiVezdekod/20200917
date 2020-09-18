import podcastStore from "./PodcastStore";

function send(type, value) {
    podcastStore.dispatch({type, value})
}

export function setTitle(title) {
    send("title", title)
}

export function setDescription(description) {
    send("description", description)
}

export function setImagePreview(imagePreview) {
    send("imagePreview", imagePreview)
}

export function setAudio(audio) {
    send("audio", audio)
}

export function setAdultContent(adultContent) {
    send("adultContent", adultContent)
}

export function setExcludeFromExport(exclude) {
    send("excludeFromExport", exclude)
}

export function setHasTrailer(hasTrailer) {
    send("trailer", hasTrailer)
}

export function setAccess(access) {
    send("access", access)
}

export function removeTimecode(pos) {
    send("remove-timecode", pos)
}

export function addTimecode() {
    send("add-timecode")
}

export function setTimecode(pos, timecode) {
    send("set-timecode", {pos, timecode})
}