import React, {createRef} from 'react';
import {Panel, PanelHeaderBack} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "./AudioEditingPage.css"
import podcastStore from "./store/PodcastStore";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import removeIcon from "./assets/ic_remove_timecode.svg"
import addIcon from "./assets/ic_add_timecode.svg"
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
import CellButton from "@vkontakte/vkui/dist/components/CellButton/CellButton";
import {addTimecode, removeTimecode, setTimecode} from "./store/actions";

class AudioEditingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {subscription: null}
    }

    componentDidMount() {
        this.state.subscription = podcastStore.subscribe(() => this.setState(this.state))
    }

    componentWillUnmount() {
        this.state.subscription()
    }

    render() {

        return (
            <Panel id={"editing_panel"}>
                <PanelHeader left={<PanelHeaderBack onClick={() => this.props.back()}/>}>
                    Редактирование
                </PanelHeader>

                <Group
                    header={<Div className={"timecodes-title"}>Таймкоды</Div>}
                    children={<div>
                        {podcastStore.getState().timecodes.map((el, index) => {

                                return <Div className={"timcode-row"}>
                                    <img className={"add-remove-icon"} onClick={() => removeTimecode(index)}
                                         src={removeIcon}/>
                                    <Input
                                        className={"timecode-title-input"}
                                        value={el.title}
                                        onChange={(e) => setTimecode(index, {time: el.time, title: e.target.value})}/>
                                    <Input
                                        value={el.time}
                                        onChange={(e) => setTimecode(index, {time: e.target.value, title: el.title})}/>
                                </Div>
                            }
                        )}
                    </div>}
                />

                <Group
                    children={<Div className={"timcode-row"} onClick={() => addTimecode()}>
                        <img className={"add-remove-icon"} src={addIcon}/>
                        <span className={"add-text"}>Добавить таймкод</span>
                    </Div>}
                />
            </Panel>
        );
    }
}

export default AudioEditingPage;