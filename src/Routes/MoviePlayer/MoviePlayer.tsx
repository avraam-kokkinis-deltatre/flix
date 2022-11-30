import React, {useEffect} from "react";
import {Link} from "react-router-dom";


const MoviePlayer = () => {


    useEffect(() => {

            const manifestUri =

                'https://raw.githubusercontent.com/bbc/exoplayer-testing-samples/master/app/src/androidTest/assets/streams/files/bigbuckbunny/bigbuckbunny.mpd';

            async function init() {

                // When using the UI, the player is made automatically by the UI object.

                const video = document.getElementById('video');

                const ui = video['ui'];

                const controls = ui.getControls();

                const player = controls.getPlayer();

                // Attach player and ui to the window to make it easy to access in the JS console.

                window.player = player;

                window.ui = ui;

                // Listen for error events.

                player.addEventListener('error', onPlayerErrorEvent);

                controls.addEventListener('error', onUIErrorEvent);

                // Try to load a manifest.

                // This is an asynchronous process.

                try {

                    await player.load(manifestUri);

                    // This runs if the asynchronous load is successful.

                    console.log('The video has now been loaded!');

                } catch (error) {

                    onPlayerError(error);

                }

            }




            function onPlayerErrorEvent(errorEvent) {

                // Extract the shaka.util.Error object from the event.

                onPlayerError(event.detail);

            }

            function onPlayerError(error) {

                // Handle player error

                console.error('Error code', error.code, 'object', error);

            }

            function onUIErrorEvent(errorEvent) {

                // Extract the shaka.util.Error object from the event.

                onPlayerError(event.detail);

            }

            function initFailed(errorEvent) {

                // Handle the failure to load; errorEvent.detail.reasonCode has a

                // shaka.ui.FailReasonCode describing why.

                console.error('Unable to load the UI library!');

            }

// Listen to the custom shaka-ui-loaded event, to wait until the UI is loaded.

            document.addEventListener('shaka-ui-loaded', init);

// Listen to the custom shaka-ui-load-failed event, in case Shaka Player fails

// to load (e.g. due to lack of browser support).

            document.addEventListener('shaka-ui-load-failed', initFailed);

            console.log('loaded!')



    },[]);



    return (
        <>

            <header className="fixed left-0 top-0 z-50 bg-black p-5 min-w-full">
                <nav>
                    <ul>
                        <li><Link to="/movie"><i className="fa fa-undo" aria-hidden="true"></i> Return to Title</Link></li>
                    </ul>
                </nav>
            </header>


            <video data-shaka-player
                   autoPlay = {true}
    poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS02v1sIbCj8pSFwHV4TBnGPSTDTw2n_w3lA&usqp=CAU"
    id="video"/>
        </>
    )
}

export default MoviePlayer;