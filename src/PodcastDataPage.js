import React from 'react';
import {Panel, PanelHeaderBack} from "@vkontakte/vkui";
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
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";

export default class PodcastDataPage extends React.Component{

    render() {

        return (
            <Panel id={"data_panel"}>
                <PanelHeader>
                    <PanelHeaderContent
                        aside={<div>Новый подкаст</div>}
                        before={<PanelHeaderBack onClick={() => this.props.back()} />}
                        status={null}/>
                </PanelHeader>
                {/*<Text weight={"bold"}>{podcastStore.getState().title}</Text>*/}

                <Button onClick={() => this.props.next()}>Далее</Button>
            </Panel>
        );
    }
}
