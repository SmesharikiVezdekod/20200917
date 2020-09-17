import { createStore } from 'redux'

const podcastStore = createStore(reducer, {
    panel: "first_panel",
    title: "Title",
    description: "Description",
    imagePreview: undefined,
    audio: undefined,
    adultContent: false,
    excludeFromExport: false,
    trailer: false,
    access: 0,
    timecodes: [
        {
            time: "4:43",
            title: "zima"
        },
        {
            time: "9:17",
            title: "leto"
        },
    ]
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
    }
    return state
}

export default podcastStore;