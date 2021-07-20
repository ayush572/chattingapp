import React from "react";
import "./chat.css";
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
    return (<div className="chat">
        <div className="chat_header">
            <Avatar />
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen ...</p>
            </div>
            <div className="chat_headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            <p className='chat_message'>
                <span className="chat_name">AYUSH</span>
                This is the message
                <span className="chat_timestamp">this is time stamp</span>
            </p>
        </div>
        <div className="chat_footer">
            <IconButton>
                <SentimentSatisfiedTwoToneIcon />
            </IconButton>
            <form>
                <input type="text" placeholder="Type the message"></input>
                <button type="submit">Send Message</button>
            </form>
            <IconButton>
                <MicIcon />
            </IconButton>
        </div>
    </div>);
}
export default Chat;