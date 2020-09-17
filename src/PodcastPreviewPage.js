import React from 'react';
import {Panel, PanelHeaderBack} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import podcastStore from "./store/PodcastStore";
import playIcon from "./assets/ic_play.svg"
import "./PodcastPreviewPage.css"
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Header from "@vkontakte/vkui/dist/components/Header/Header";

export default function PodcastPreviewPage(props) {

    return (
        <Panel id={"preview_panel"}>
            <PanelHeader>
                <PanelHeaderContent
                    aside={<div>Новый подкаст</div>}
                    before={<PanelHeaderBack onClick={() => props.back()} />}
                    status={null}/>
            </PanelHeader>

            <Group
                separator={'auto'}
                header={<div>
                    <div className={"image-preview-block"}>
                        <img src={podcastStore.getState().imagePreview}/>
                        <img src={playIcon}/>
                    </div>
                    <div className={"podcast-title-text-block"}>
                        <span className={"block-title"}>{podcastStore.getState().title}</span>
                        <span className={"link"}>ПапаDogs</span>
                        <span className={"subtitle"}>Длительность: 59:16</span>
                    </div>
                </div>}
            />

            <Group
                separator={'auto'}
                header={<div className={"block-title"}>Описание</div>}
                description={<div className={"description-text"}>
                    {podcastStore.getState().description}
                </div>}
            />

            <Group
                separator={'auto'}
                header={<div className={"block-title"}>Содержание</div>}
                description={<div>
                    {podcastStore.getState().timecodes.map(el => {
                        return <div style={{
                            paddingTop: 14,
                            paddingBottom: 14,
                        }}>
                            <span className={"timecode-time"}>{el.time}</span>
                            <span className={"timecode-title"}>  —  {el.title}</span>
                        </div>}
                    )}
                </div>}
            />

            <Button stretched={true} size={'l'} onClick={() => props.next()}>Далее</Button>
        </Panel>
    );
}