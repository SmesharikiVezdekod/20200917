import React from 'react';
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

function AudioEditingPage(props) {

    return (
        <Panel id={"editing_panel"}>
            <PanelHeader>Редактирование</PanelHeader>
            {/*<Button onClick={() => props} />*/}
        </Panel>
    );
}

export default AudioEditingPage;