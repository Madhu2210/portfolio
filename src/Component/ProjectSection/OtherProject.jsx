import { PiArrowSquareOutBold, PiFolderOpen, PiGithubLogoBold } from "react-icons/pi";

const OtherProject = (prop) => {
    const { data } = prop
    const { link, name, desc, techStack } = data

    return (
        <div className="project-wrapper">
            <div className="project-header">
                <div className="left highlight-text">
                    <PiFolderOpen />
                </div>
                <div className="right">
                    {link?.["github"] && <PiGithubLogoBold />}
                    {link?.["website"] && <PiArrowSquareOutBold />}

                </div>
            </div>
            <div className="project-body">
                <div className="project-name">
                    {name}
                </div>
                <p className="project-desc">
                    {desc}
                </p>
                <ul className="project-tech">
                    {techStack.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default OtherProject;
