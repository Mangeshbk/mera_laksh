import {useState,useEffect} from 'react';
// import './App.css';
import {v4 as uuid} from 'uuid';
import './chat.css';
import 'antd/dist/antd.css';
import {Input,Typography} from 'antd';
import {w3cwebsocket as W3CwebSocket} from 'websocket';
// import LoadingOverlay from "react-loading-overlay";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const client = new W3CwebSocket('ws://127.0.0.1:8000');
const {Search} = Input;
// const { Text } = Typography;
// const {Meta} = Card;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'gray',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
function Chat() {
  const classes = useStyles();

  const [text,setText] = useState("");
  const [user,setUser] = useState("");
  const [chat,setChat] = useState(false);
  const [messages,setMessages] = useState([]);
  const [Loading,setLoading] = useState(false);
  const [send,setSend] = useState(true);
  useEffect(()=>{
    setLoading(true);
    client.onopen = () =>{ //this function runs whenever client is connected to server
      console.log('websocket client connected');
      setLoading(false);
    }
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log('Got reply!',dataFromServer);
      if(dataFromServer.type="message"){
        setMessages((prev)=>[...prev,dataFromServer])
      }
      setSend(true);
    }
  },[]);
  // console.log(messages);
  const SendMessage = () =>{ //sending the message
    client.send(JSON.stringify({
      type:"message",
      msg:text,
      user:user
    }))
    setText("");
    setSend(false);
  }
  return (
    
    <div className="CApp">
        {chat?
        <div className="chat"> {/**Chat option wrapper*/}
            <div>
            {messages?.map(msg=>msg.user==user?
            <Grid container key={uuid()} spacing={1} style={{width:'100%'}}>
            <Grid item xs={5} sm={5}>
                {/* <Paper className={classes.paper}>{msg.user}</Paper> */}
            </Grid>
            <Grid item xs={5} sm={5}>
                <Paper className={classes.paper}>{msg.msg}</Paper>
            </Grid>
            <Grid item xs={1} sm={1} >
              <Avatar style={{float:"left"}} className={`${classes.orange} myDIV`}>{`${msg.user.split(" ")[0][0]}${msg.user.split(" ")[1][0]}`}</Avatar>
              <div class="hide">{msg.user}</div>
            </Grid>
            </Grid>
            :
            <Grid container key={uuid()} spacing={2}>
                  <Grid item  item xs={1} sm={1}>
                    <Avatar style={{float:"right"}} className={`${classes.purple} myDIV`}>{`${msg.user.split(" ")[0][0]}${msg.user.split(" ")[1][0]}`}</Avatar>
                    <div class="hide">{msg.user}</div>
                  </Grid>
                  <Grid item  item xs={5} sm={5}>
                      <Paper className={classes.paper}>{msg.msg}</Paper>
                  </Grid>
                  <Grid item  item xs={5} sm={5}>
                      
                </Grid>
            </Grid>
            )}
          </div>
          <div className="bottom">
            <Search 
              placeholder="Type Your message here"
              enterButton="Send"
              value={text}
              size="large"
              disabled={!send}
              onChange={(e)=>setText(e.target.value)}
              onSearch={SendMessage}
            />
          </div>
        </div>
            :
            // <div className="User">
            // <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Your name"/>
            // <button onClick={()=>setChat(true)}>CHAT</button>
            // </div>
          <div style={{padding:`200px`,paddingLeft:"550px",width:"70vw"}}>
              <Search
                placeholder="Enter Your Name"
                enterButton="Begin Chat"
                size="large"
                onSearch={value=>{setChat(true);setUser(value)}}
              />
          </div> 
        }
    </div>
  );
}

export default Chat;
