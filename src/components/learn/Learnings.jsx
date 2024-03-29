import React, { useRef, useState } from "react";
import { UserAgent } from '@apirtc/apirtc';
// import NodeState from "../../contexts/NodeState";
import NodeContext from "../../contexts/NodeContext";
import { Link, useNavigate } from "react-router-dom";
import MainCmp from "../MainCmp";

function Learnings({image, name}){
    // const {startConversation} = useContext(NodeContext)
    const conversationRef = useRef(null);
  const [conversationName, setConversationName] = useState("")


  //streamListchanged: subscribe to new remote streams published in the conversation and get future events triggered by this stream
  var onStreamListChangedHandler = function (streamInfo) {
    if (streamInfo.listEventType === 'added' && streamInfo.isRemote) {

      if (conversationRef.current)
        conversationRef.current.subscribeToStream(streamInfo.streamId)
          .then((stream) => {
            console.log('subscribeToStream success', streamInfo);
          }).catch((err) => {
            console.error('subscribeToStream error', err);
          });
    }
  }

  //streamAdded: Display the newly added stream
  var onStreamAddedHandler = function (stream) {
    if (stream.isRemote) {
      stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false);
    }
  }

  //streamRemoved: Remove the participant's display from the UI
  var onStreamRemovedHandler = function (stream) {
    if (stream.isRemote) {
      stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId)
    }
  }


  var startConversation = function () {
    var localStream = null;
    /**
     * Get your free account on https://cloud.apirtc.com/ 
     * and replace the value below with your own apikey value 
     * to be found at https://cloud.apirtc.com/enterprise/api
     */

    var apikey = "2e343e5cbe62a4aa184b6d2591c6a76a"

    //Configure the User Agent using the apikey.
    var ua = new UserAgent({
      uri: 'apiKey:' + apikey
    })

    //Connect the UserAgent and get a session
    ua.register().then((session) => {

      var conversationName = "Kishan_Chat"

      const conversation = session.getOrCreateConversation(conversationName, { meshOnlyEnabled: true })

      setConversationName(conversation.getName())

      conversationRef.current = conversation

      conversation.on("streamListChanged", onStreamListChangedHandler)
      conversation.on("streamAdded", onStreamAddedHandler)
      conversation.on("streamRemoved", onStreamRemovedHandler)

      //Instantiate a local video stream object
      ua.createStream({
        constraints: {
          audio: true,
          video: true
        }
      })
        .then((stream) => {

          // Save local stream in a variable accessible to eventhandlers
          localStream = stream;

          //Display the local video stream
          stream.attachToElement(document.getElementById('local-video-stream'));
          document.getElementById('local-stream-id').innerHTML = ua.getUsername()

          //Join the conversation
          conversation.join()
            .then((response) => {

              //Publish the local stream to the conversation
              conversation
                .publish(localStream)
                .then((stream) => {
                  console.log("Your local stream is published in the conversation", stream);
                })
                .catch((err) => {
                  console.error("publish error", err);
                });
            }).catch((err) => {
              console.error('Conversation join error', err);
            });

        }).catch((err) => {
          console.error('create stream error', err);
        });
    });
  }

    const [hide, sethide] = useState(true)

    const func=()=>{
        sethide(false)
        startConversation()
    }   
    return(
        <>
        <div>
            <div className="farmer">
               <img className="farmer-img" src={image} />
               <div className="farmer-footer">
                    <h1 className="farmer-name">{name}</h1>
                    
                        <button className="famers-connect-btn" onClick={()=>{
                         func()
                            
                        }}> connect </button>
                    
               </div>
            </div>
        </div>

                        <div className={hide ? "hidden" : "absolute top-0 right-0"}>
                                <MainCmp comp={
                                <>
                                    <div className="w-full h-full bg-white">
                                        <p>conversationName</p>
                                        <h2 className='h1'>Remote videos</h2>
                                        <div id="remote-container">
                                        {/* <!-- This is where the remote video streams will be added --> */}
                                        </div>
                                        <div id="local-container">
                                        <h2 className='h1'>Local video</h2>
                                        <p><span id="local-stream-id"></span></p>
                                        {/* <!-- This is where we are going to display our local video stream --> */}
                                        <video id="local-video-stream" autoPlay muted className='w-36 h-36'></video>
                                        </div>
                                    </div>

                                </>
                            } />
                        </div>
        </>

        
    )
}

export default Learnings