import React from 'react';
import './App.css';
import FirstPage from "./FirstPage";
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";
import LastPage from "./LastPage";
import PodcastDataPage from "./PodcastDataPage";
import AudioEditingPage from "./AudioEditingPage";
import MusicPickingPage from "./MusicPickingPage";
import PodcastPreviewPage from "./PodcastPreviewPage";
import podcastStore from "./store/PodcastStore";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            panel: "first_panel",
        }
    }

    render() {
        return (
            <View activePanel={this.state.panel}>

                <FirstPage
                    id={"first_panel"}
                    next={() => {this.setState({panel: "data_panel"})}}/>

                <PodcastDataPage
                    id={"data_panel"}
                    back={() => {this.setState({panel: "first_panel"})}}
                    openEditing={() => {this.setState({panel: "editing_panel"})}}
                    next={() => {this.setState({panel: "preview_panel"})}}/>

                <AudioEditingPage
                    id={"editing_panel"}
                    back={() => {this.setState({panel: "data_panel"})}}/>

                <MusicPickingPage
                    id={"music_picking_panel"}
                    back={() => {this.setState({panel: "editing_panel"})}}/>

                <PodcastPreviewPage
                    id={"preview_panel"}
                    back={() => {this.setState({panel: "data_panel"})}}
                    next={() => {this.setState({panel: "last_panel"})}}/>

                <LastPage
                    id={"last_panel"}
                    next={() => {this.setState({panel: "first_panel"})}}/>
            </View>
        );
    }
}

export default App;
