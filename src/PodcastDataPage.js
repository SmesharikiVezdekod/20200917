import React from 'react';
import {Checkbox, Input, Panel, PanelHeaderBack} from "@vkontakte/vkui";
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
import './PodcastDataPage.css'
import PictureIcon from "./assets/ic_picture.svg"

export default class PodcastDataPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {image: null, audio: null}
        //this.setState({image: PictureIcon})
    }

    render() {

        return (
            <Panel id={"data_panel"}>
                <PanelHeader left={<PanelHeaderBack onClick={() => this.props.back()}/>}>
                    Новый подкаст
                </PanelHeader>
                {/*<Text weight={"bold"}>{podcastStore.getState().title}</Text>*/}
                <div className={"content"}>
                    <div className={"horizontal-block"}>
                        <div className={"load-image-block"}>
                            <input className={"load-file-input"} id="image-input" type="file" accept="image/*"
                                   onChange={(event) => {
                                       const reader = new FileReader();
                                       reader.onload = (e) => {
                                           setImagePreview(e.target.result);
                                           this.setState({image: e.target.result})
                                           document.getElementById("image-input")
                                       };
                                       reader.readAsDataURL(event.target.files[0]);
                                   }}/>
                            <label htmlFor="image-input" className={"load-image-label"}>
                                <img src={PictureIcon} className={"load-image-icon-img"}/>
                                <img src={this.state.image} className={"load-image-img"}/>
                            </label>
                        </div>
                        <div className={"input-block"}>
                            <Text weight={"regular"} className={"input-hint-text"}>
                                Название
                            </Text>

                            <Input id={"podcast_title"} placeholder={"Введите название подкаста"}/>
                        </div>
                    </div>

                    <div className={"input-block-description"}>
                        <Text weight={"regular"} className={"input-hint-text"}>
                            Описание
                        </Text>

                        <Input id={"podcast_description"}/>
                    </div>

                    <div id={"load_audio_block"} className={"load-audio-block"}>
                        <Text className={"audio-title-text"} weight={"semibold"}>
                            Загрузите ваш подкаст
                        </Text>

                        <Text className={"audio-description-text"} weight={"regular"}>
                            Выберите готовый аудиофайл из вашего телефона и добавьте его
                        </Text>

                        <div className={"load-audio-button-block"}>
                            <input className={"load-file-input"} id="audio-input" type="file" accept="audio/*"
                                   onChange={(event) => {
                                       const reader = new FileReader();
                                       reader.onload = (e) => {
                                           setAudio(e.target.result);
                                           this.setState({audio: e.target.result})
                                           document.getElementById("load_audio_block").style.display = 'none'
                                           document.getElementById("audio_block").style.display = 'block'
                                       };
                                       reader.readAsDataURL(event.target.files[0]);
                                   }}/>
                            <label className={"load-audio-button-label"} htmlFor="audio-input">
                                <Button mode={"outline"} onClick={() => document.getElementById("audio-input").click()}>
                                    Загрузить файл
                                </Button>
                            </label>
                        </div>
                    </div>

                    <div className={"audio-block"} id={"audio_block"}>
                        <Text weight={"regular"} className={"audio-text"}>
                            Вы можете добавить таймкоды и скорректировать подкаст в режиме редактирования
                        </Text>
                        <Button className={"audio-block-edit-button"} mode={"outline"} onClick={() => {
                            setTitle(document.getElementById("podcast_title").value)
                            setDescription(document.getElementById("podcast_description").value)
                            this.props.openEditing()
                        }}>Редактировать</Button>
                    </div>

                    <Checkbox id={"adult_content"} value={podcastStore.getState().adultContent}
                              onChange={(event) => {
                                  setAdultContent(event.target.value)
                                  console.log(event.target.value)
                              }}>
                        Ненормативный контент
                    </Checkbox>
                    <Checkbox id={"exclude_from_export"} value={podcastStore.getState().excludeFromExport}
                              onChange={(event) => {
                                  setExcludeFromExport(event.target.value)
                              }}>
                        Исключить эпизод из экспорта
                    </Checkbox>
                    <Checkbox id={"has_trailer"} value={podcastStore.getState().trailer}
                              onChange={(event) => {
                                  setHasTrailer(event.target.value)
                              }}>
                        Трейлер подкаста
                    </Checkbox>

                    <Button size={"xl"} onClick={() => {
                        setTitle(document.getElementById("podcast_title").value)
                        setDescription(document.getElementById("podcast_description").value)
                        this.props.next()
                    }}>Далее</Button>
                </div>
            </Panel>
        );
    }
}
