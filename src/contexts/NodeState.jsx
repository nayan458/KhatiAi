import React , { useState, useRef } from 'react'
import NodeContext from './NodeContext'
import { UserAgent } from '@apirtc/apirtc';
import { useNavigate } from 'react-router-dom';

export default function NodeState(props) {
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


  // Active class

    return (
        <NodeContext.Provider value={
            {
                startConversation, conversationName, setConversationName
            }
          }>
            {props.children}
        </NodeContext.Provider>
  )
}
