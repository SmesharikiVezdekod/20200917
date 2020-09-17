import React from 'react';
import {Panel, PanelHeaderBack} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

export default function PodcastPreviewPage(props) {

    return (
        <Panel id={"preview_panel"}>
            <PanelHeader>
                <PanelHeaderContent
                    aside={<div>Новый подкаст</div>}
                    before={<PanelHeaderBack onClick={() => props.back()} />}
                    status={null}/>
            </PanelHeader>

            <Button onClick={() => props.next()}>Далее</Button>
        </Panel>
    );
}