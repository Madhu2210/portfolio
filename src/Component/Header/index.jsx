import { useState } from 'react';
import "./header.scss";
import useScrollDirection from '../../CustomHook/useScrollDirection';
import { AosWrapper } from '../Common/Wrapper';
import { useEffect } from 'react';
import { useWindowSize } from '../../CustomHook/useWindowSize';
import { TbMenuDeep } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";


const Header = () => {
    const direction = useScrollDirection();
    const [isMenu, setIsMenu] = useState(false);
    const [width] = useWindowSize()
    useEffect(() => {
        if (width < 768 && isMenu) {
            document.getElementsByTagName('body')[0].classList.add("hideOverflow")
        } else {
            document.getElementsByTagName('body')[0].classList.remove("hideOverflow")
        }
    }, [width, isMenu]);
    const closeMenu = () => {
        if (width < 768) {
            setIsMenu(false)
        }
    }

    const headline = [{ text: "About Me", navigate: "about" }, { text: "Experience", navigate: "job" }, { text: "Project", navigate: "project" }, { text: "Contact Me", navigate: "contact" }]
    return (

        <header
            className={`header container  ${direction === "down" ? "scaleUp" : ""}`}>
            <AosWrapper animation="fade-down" delay="100">
                <div className="header-logo">
                    <a href="/#hero">MK</a>
                </div>
            </AosWrapper>
            <AosWrapper animation="fade-down" delay="200">
                <button className="menu" type='button' onClick={() => setIsMenu(true)}>
                    <TbMenuDeep />
                </button>
            </AosWrapper>


            <nav className={`header-nav ${isMenu ? "show" : "hide"}`}>
                <button className="close" type='button' onClick={() => setIsMenu(false)}>
                    <IoCloseOutline />
                </button>
                <ul className="header-nav-list">
                    {headline.map((item, key) =>
                        <AosWrapper animation="fade-down" delay={(key + 1) + 100} clasToAdd={"header-nav-item"} key={key} type={"list"}>
                            <a href={`/#${item?.navigate}`} className='bottom-hightlight' onClick={closeMenu}>{item?.text}</a>
                        </AosWrapper>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header