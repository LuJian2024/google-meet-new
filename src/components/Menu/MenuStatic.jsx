import menuIcons from "../../assets/icons"
import "./Menu.css"



const MenuStatic = () => {

    return (
        <div>
            <h1>hallo</h1>
            <div className="menu-container">
                {menuIcons.map((icon, i) => <p key={i} >{icon}</p>)}
            </div>
        </div>
    );
}

export default MenuStatic;






//-------fortawesome/react-fontawesome-------
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faFaceSmile, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee, faFaceSmile, faClosedCaptioning } from '@fortawesome/free-regular-svg-icons';
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
// const element = <FontAwesomeIcon icon={faCoffee} />;
// const smileFace = <FontAwesomeIcon icon={faFaceSmile} />
// // <FontAwesomeIcon icon={faClosedCaptioning} />
// const arr = [<FontAwesomeIcon icon={faCoffee} />, <FontAwesomeIcon icon={faFaceSmile} />, <FontAwesomeIcon icon={faClosedCaptioning} />]
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="26px"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                {smileFace}
                {element}
                {arr[2]}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="26px"><path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z" /></svg> */}
{/* <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
                <FontAwesomeIcon icon="check-square" />
                With Coffee Checked, these companies always know their coffee is hot and ready! */}
