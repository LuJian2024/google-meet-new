
import "./Emojis.css";

import { useState } from 'react';
const Emojis = () => {

    const [emoji, setEmoji] = useState("")
    // const [animateKey, setAnimateKey] = useState(0);
    //    const [skin, setSkin] = useState("")

    return (
        <div>

            <div className='emojis'>
                {/* {emoji && <h1 key={animateKey} className='emoji-clicked' onAnimationEnd={() => setEmoji("")} >{emoji}</h1>} */}

                {emoji && <h1 className='emoji-clicked' onAnimationEnd={() => setEmoji("")} >{emoji}</h1>}
                {/* <h5 className='skinText'>{skin}</h5> */}
                <button onClick={() => { setEmoji("💖"); }} >💖</button>
                <button onClick={() => { setEmoji("👍"); }} >👍</button>
                <button onClick={() => { setEmoji("🎉"); }} >🎉</button>
                <button onClick={() => { setEmoji("👏"); }} >👏</button>
                <button onClick={() => { setEmoji("😂"); }} >😂</button>
                <button onClick={() => { setEmoji("😮"); }} >😮</button>
                <button onClick={() => { setEmoji("😢"); }} >😢</button>
                <button onClick={() => { setEmoji("🤔"); }} >🤔</button>
                <button onClick={() => { setEmoji("👎"); }} >👎</button>
                {/* <button onClick={() => { setEmoji("👎"); setAnimateKey(animateKey + 1) }} >👎</button> */}


            </div>
            {/* <button className='skin' onClick={()=>{setSkin("Skin tone")} }  >😶</button> */}
        </div >
    );
}

export default Emojis;


