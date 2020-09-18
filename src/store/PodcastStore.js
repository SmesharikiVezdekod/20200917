import { createStore } from 'redux'

const podcastStore = createStore(reducer, {
    panel: "first_panel",
    title: "Title",
    description: "Description",
    imagePreview: "https://cdn.shopify.com/s/files/1/1074/8258/products/9040-99_2048x.jpg?v=1572553208",
    audio: "https://zaycev.net/musicset/dl/5c0f3aa4eda818f24c4ec0568ad0a6fa/8773159.json?spa=false",
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
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },

        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "leto"
        },
        {
            time: "9:17",
            title: "oops"
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