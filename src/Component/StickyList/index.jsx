import { AosWrapper } from "../Common/Wrapper"
import "./stickyList.scss";
import { PiGithubLogoBold, PiInstagramLogoBold, PiFacebookLogoBold, PiLinkedinLogoBold } from "react-icons/pi";
const StickyList = () => {
    const openLink = (e) => {
        if (e == "git") {
            window.open("https://github.com/Madhu2210/portfolio", '_blank', 'noopener,noreferrer');
        }
        if (e == "link") {
            window.open("https://www.linkedin.com/in/joy-web-developer/", '_blank', 'noopener,noreferrer');
        }

        if (e == "ins") {
            alert("Not present")
            // window.open("https://github.com/Joybosu456/myNewWebPage/tree/master", '_blank', 'noopener,noreferrer');
        }

        if (e == "fb") {
            alert("Not Present")
            // window.open("https://github.com/Joybosu456/myNewWebPage/tree/master", '_blank', 'noopener,noreferrer');
        }

        else {
            return
        }

    }
    return (
        <>
            <div className="position-left">
                <AosWrapper animation={"zoom-in"} delay={"1500"} anchor={"bottom left"} >
                    <ul className="socail-list sticky">
                        <li className="socail-list-item" onClick={(e) => openLink("git")}><PiGithubLogoBold /></li>
                        <li className="socail-list-item" onClick={(e) => openLink("ins")}><PiInstagramLogoBold /></li>
                        <li className="socail-list-item" onClick={(e) => openLink("fb")}><PiFacebookLogoBold /></li>
                        <li className="socail-list-item" onClick={(e) => openLink("link")}><PiLinkedinLogoBold /></li>
                    </ul>
                </AosWrapper>
            </div>
            <div className="position-right">
                <AosWrapper animation={"zoom-in"} delay={"1500"} anchor={"bottom right"} >
                    <p className="mail sticky">

                        <a href="mailto:madhu.kahar2210@gmail.com" className="mail-text" >madhu.kahar2210@gmail.com</a>

                    </p>
                </AosWrapper>
            </div>
            <footer className="bright-text footer">
                <a href="https://github.com/mrghost143" className="bright-text" target="_blank" rel="noreferrer">Built, designed and enhanced by Madhu Kahar</a>
            </footer>
        </>
    )
}

export default StickyList