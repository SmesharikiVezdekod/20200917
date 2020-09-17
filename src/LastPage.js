import React from 'react';
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import icVkDone from "./assets/ic_vk_done.svg"

function LastPage(props) {

    const text = <div>
        <Text className={"placeholder-text"} weight={"bold"}>Подкаст добавлен</Text>
        <Text className={"placeholder-text"} weight={"regular"}>Раскажите своим подписчикам о новом подкасте, чтобы получить больше слушателей..</Text>
    </div>

    return (
        <Panel id={"last_panel"}>
            <PanelHeader>Подкасты</PanelHeader>
            <Placeholder
                stretched={true}
                action={<Button onClick={() => {props.next()}}>Поделиться подкастом</Button>}
                icon={<img src={icVkDone} alt={"add"}/>}
                header={text}/>
        </Panel>
    );
}

export default LastPage;