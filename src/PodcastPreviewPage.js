import React from 'react';
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

function PodcastPreviewPage(props) {

    return (
        <Panel id={"preview_panel"}>
            <PanelHeader>Новый подкаст</PanelHeader>

        </Panel>
    );
}

export default PodcastPreviewPage;