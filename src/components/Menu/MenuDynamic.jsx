import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUser, faCommentAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


const MenuDynamic = () => {
    const navigate = useNavigate()
    const [onOff, setOnOff] = useState(
        {
            audioSet: false,
            microphone: false,
            videoSet: false,
            camera: false,
            captions: false,
            reaction: false,
            present: false,
            raiseHand: false,
            moreOptions: false,
            leave: false
        })

    // 你遇到的警告是因为在渲染过程中调用了setState，这会导致组件在同一渲染周期内再次渲染。具体来说，MenuDynamic组件在渲染过程中调用了navigate函数，这会尝试更新BrowserRouter组件的状态，从而导致这个警告。
    // 要解决这个问题，你可以使用useEffect钩子来处理导航逻辑，而不是直接在渲染过程中调用navigate。
    useEffect(() => {

        onOff.leave && navigate('/leave');

    }, [onOff.leave, navigate]);


    return (<>

        {/* {onOff.leave && navigate('/leave')} */}

        <div style={{ display: 'flex', justifyContent: 'space-between', flexBasis: '66%' }}>

            {onOff.audioSet &&
                <div className="audio-settings-container">
                    <div className="audio-setting">
                        <i className="icon-microphone"></i>
                        <span>Default</span>
                        <i className="icon-dropdown right"></i>
                    </div>
                    <div className="audio-setting">
                        <i className="icon-speaker"></i>
                        <span>Default</span>
                        <i className="icon-dropdown right"></i>
                    </div>
                    <div className="settings-icon">
                        <i className="icon-settings"></i>
                    </div>
                </div>
            }
            <div className="menu-container">
                <div style={{ display: 'flex', gap: '5px' }}>
                    {/* audioSet */}
                    <p onClick={() => setOnOff({ ...onOff, audioSet: !(onOff.audioSet) })}>{!onOff.audioSet ? <svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                        : <svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                    </p>

                    {/* microphone */}
                    <p onClick={() => setOnOff({ ...onOff, microphone: !(onOff.microphone) })} style={{ backgroundColor: onOff.microphone && 'red', '--hover-content': onOff.microphone ? '"Microphone settings on"' : '"Microphone settings off"' }} >{!onOff.microphone ? <svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg>
                        : <svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="26px"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z" /></svg>}
                    </p>

                    {/* videoSet */}
                    <p onClick={() => setOnOff({ ...onOff, videoSet: !(onOff.videoSet) })} >{!onOff.videoSet ? <svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                        : <svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>}
                    </p>

                    {/* camera */}
                    <p onClick={() => setOnOff({ ...onOff, camera: !(onOff.camera) })} style={{ backgroundColor: onOff.camera && 'red', '--hover-content': onOff.camera ? '"Video settings on"' : '"Video settings off"' }}>{!onOff.camera ? <svg className="center-svg" width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                        : <svg className="center-svg" width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9V192 320v5.8l-32-25.1V128c0-35.3-28.7-64-64-64H113.9L38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5V384c0 35.3 28.7 64 64 64H352c23.4 0 43.9-12.6 55-31.3z" /></svg>}
                    </p>

                    {/* captions */}
                    <p onClick={() => setOnOff({ ...onOff, captions: !(onOff.captions) })} style={{ backgroundColor: onOff.captions && 'blue' }}><svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="26px"><path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z" /></svg></p>

                    {/* reaction */}
                    <p onClick={() => setOnOff({ ...onOff, reaction: !(onOff.reaction) })} style={{ backgroundColor: onOff.reaction && 'blue' }}><svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="26px"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg></p>

                    {/* present */}
                    <p onClick={() => setOnOff({ ...onOff, present: !(onOff.present) })}> <span style={{ width: '23px', height: '16px', marginTop: '14px', border: !onOff.present ? '2px solid white' : '2px solid gray', display: 'flex', justifyContent: 'center' }}><svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="8px"><path style={{ fill: onOff.present && 'gray' }} d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg></span></p>

                    {/* raiseHand */}
                    <p onClick={() => setOnOff({ ...onOff, raiseHand: !(onOff.raiseHand) })} style={{ backgroundColor: onOff.raiseHand && 'blue' }}><svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="26px"><path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64V261.5l-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75H296h8c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5V160c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2V96c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1c0 0 0-.1 0-.1V64c0-8.8 7.2-16 16-16s16 7.2 16 16V95.9c0 0 0 .1 0 .1V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16v55.9c0 0 0 .1 0 .1v80c0 13.3 10.7 24 24 24s24-10.7 24-24V160.1c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16V332.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2H296h-8.5c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9V232c0 13.3 10.7 24 24 24s24-10.7 24-24V96.1z" /></svg></p>

                    <p><svg className="center-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" width="6px"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg></p>
                    {/* leave */}
                    <p onClick={() => setOnOff({ ...onOff, leave: !(onOff.leave) })}><svg className="center-svg " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="26px"><path d="M601.2 5.1c10.4-8.2 25.5-6.3 33.7 4.1s6.3 25.5-4.1 33.7l-592 464c-10.4 8.2-25.5 6.3-33.7-4.1s-6.3-25.5 4.1-33.7l155.6-122C101.8 270 64 171.4 64 64c0-18 12.1-33.8 29.5-38.6l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L208 207.3c12 25.5 27.2 49.2 45 70.7L601.2 5.1zM234.3 415.6l91.3-72c13.7 9.1 28 17.3 43 24.3L409 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C545.8 499.9 530 512 512 512c-104.9 0-201.3-36-277.7-96.4z" /></svg></p>
                </div>


                <div className="menu-container-right">
                    <div className="icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </div>
                    <div className="icon notification-icon">
                        <FontAwesomeIcon icon={faUser} />

                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faCommentAlt} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                </div>


            </div>
        </div >
    </>
    );
}

export default MenuDynamic;
