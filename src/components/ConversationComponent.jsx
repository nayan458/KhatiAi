import React , { useState, useRef, useContext } from 'react'
import { UserAgent } from '@apirtc/apirtc';
import MainCmp from './MainCmp';
import NodeContext from '../contexts/NodeContext';

export default function ConversationComponent() {

    const {startConversation, conversationName, setConversationName} = useContext(NodeContext)

  return (
    <MainCmp comp={
        <>
            <div>
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
  )
}
