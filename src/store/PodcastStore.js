import { createStore } from 'redux'

const podcastStore = createStore(reducer, {
    panel: "first_panel",
    title: "",
    description: "",
    imagePreview: null,
    audio: null,
    adultContent: false,
    excludeFromExport: false,
    trailer: false,
    access: 0,
    timecodes: []
});

function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "title":
            state.title = action.value
            break;
        case "description":
            state.description = action.value
            break;
        case "imagePreview":
            state.imagePreview = action.value
            break;
        case "audio":
            state.audio = action.value
            break;
        case "adultContent":
            state.adultContent = action.value
            break;
        case "excludeFromExport":
            state.excludeFromExport = action.value
            break;
        case "trailer":
            state.trailer = action.value
            break;
        case "access":
            state.access = action.value
            break;
        case "add-timecode":
            state.timecodes.push({time: "00:00", title: "New timecode"})
            break;
        case "remove-timecode":
            state.timecodes.splice(action.value, 1)
            break;
        case "set-timecode":
            const pos = action.value.pos
            const timecode = action.value.timecode
            state.timecodes[pos] = timecode
            break;
    }
    return state
}

export default podcastStore;