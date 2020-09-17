import React from 'react';
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";

function MusicPickingPage(props) {

    return (
        <Panel id={"music_picking_panel"}>
            <PanelHeader>Выбрать музыку</PanelHeader>

        </Panel>
    );
}

export default MusicPickingPage;