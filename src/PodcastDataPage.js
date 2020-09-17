import React from 'react';
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import {
    setTitle,
    setAccess,
    setDescription,
    setImagePreview,
    setHasTrailer,
    setAudio,
    setAdultContent,
    setExcludeFromExport
} from "./store/actions";
import podcastStore from "./store/PodcastStore";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

export default class PodcastDataPage extends React.Component{

    render() {

        return (
            <Panel id={"data_panel"}>
                <PanelHeader>Новый подкаст</PanelHeader>
                {/*<Text weight={"bold"}>{podcastStore.getState().title}</Text>*/}
            </Panel>
        );
    }
}
