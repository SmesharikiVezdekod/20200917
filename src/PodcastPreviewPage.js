import React, {createRef} from 'react';
import {Panel, PanelHeaderBack, Separator} from "@vkontakte/vkui";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import podcastStore from "./store/PodcastStore";
import playIcon from "./assets/ic_play.svg"
import pauseIcon from "./assets/ic_pause.svg"
import "./PodcastPreviewPage.css"
import "./base.css"
import Group from "@vkontakte/vkui/dist/components/Group/Group";

export default class PodcastPreviewPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {duration: "00:00"}
    }

    formatSeconds(secs) {
        secs = Math.round(secs);
        let hours = Math.floor(secs / (60 * 60));

        const divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        const divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        // console.log(hours + ":" + minutes + ":" + seconds);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            if (hours < 1) {
                return minutes + ":" + seconds;
            }
            hours = "0" + hours;
        }

        return hours + ":" + minutes + ":" + seconds;
    }

    render() {
        const audioRef = createRef()
        const playIconRef = createRef()

        return (
            <Panel id={"preview_panel"}>
                <PanelHeader left={<PanelHeaderBack onClick={() =>this.props.back()} />}>
                    Редактирование
                </PanelHeader>

                <div className={"page"}>
                    <Group
                        separator={'hide'}
                        children={<div className={"header-block"}>
                            <div className={"image-preview-block"}>
                                <img className={"image-preview"} src={podcastStore.getState().imagePreview}/>
                                <img ref={playIconRef} className={"play-icon"} src={playIcon}
                                     onClick={() => {
                                         const player = audioRef.current
                                         if (player.paused) {
                                             player.play()
                                         } else {
                                             player.pause()
                                         }
                                     }}/>
                                <audio
                                    ref={audioRef}
                                    src={podcastStore.getState().audio}
                                    onPlay={() => {
                                        playIconRef.current.src = pauseIcon
                                    }}
                                    onPause={() => {
                                        playIconRef.current.src = playIcon
                                    }}
                                    onEnded={() => {
                                        playIconRef.current.src = playIcon
                                    }}
                                    onDurationChange={() => this.setState({duration: this.formatSeconds(audioRef.current.duration)})}/>
                            </div>
                            <div className={"podcast-title-text-block"}>
                                <span className={"block-title"}>{podcastStore.getState().title}</span>
                                <span className={"link"}>ПапаDogs</span>
                                <span className={"subtitle"}>Длительность: {this.state.duration}</span>
                            </div>
                        </div>}
                    />

                    <Separator style={{marginTop: "12px"}} wide={true}/>

                    <Group
                        separator={'hide'}
                        header={<div className={"block-title"}>Описание</div>}
                        children={<div className={"description-text"}>
                            {podcastStore.getState().description}
                        </div>}
                    />

                    <Separator wide={true}/>

                    <Group
                        separator={'hide'}
                        header={<div className={"block-title"}>Содержание</div>}
                        children={<div>
                            {podcastStore.getState().timecodes.map(el => {
                                    return <div style={{
                                        paddingTop: 14,
                                        paddingBottom: 14,
                                    }}>
                                        <span className={"timecode-time"}>{el.time}</span>
                                        <span className={"timecode-title"}>  — {el.title}</span>
                                    </div>
                                }
                            )}
                        </div>}
                    />

                    <Separator style={{marginBottom: "24px"}} wide={true}/>

                    <Button className={"next-button"} style={{width: "100%"}} stretched={true} size={'l'}
                            onClick={() => this.props.next()}>Далее</Button>
                </div>
            </Panel>
        );
    }
}