import React from 'react';
import {Panel} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import icVkAdd from "./assets/ic_vk_add.svg"

function FirstPage(props) {

    const text = <div>
        <Text className={"placeholder-text"} weight={"bold"}>Добавьте первый подкаст</Text>
        <Text className={"placeholder-text"} weight={"regular"}>Добавляйте, редактируйте и делитесь подкастами вашего сообщества.</Text>
    </div>

    return (
        <Panel id={"first_panel"}>
            <PanelHeader>Подкасты</PanelHeader>
            <Placeholder
                stretched={true}
                action={<Button onClick={() => {props.next()}}>Добавить подкаст</Button>}
                icon={<img src={icVkAdd} alt={"add"}/>}
                header={text}/>
        </Panel>
    );
}

export default FirstPage;