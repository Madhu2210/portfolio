export const AosWrapper = (prop) => {
    const { children, animation = "", delay = "", anchor = "", type = "plain", key: Indexkey, clasToAdd = "" } = prop;
    if (type == "list") {
        return (
            <li data-aos={animation} data-aos-delay={delay} data-aos-anchor-placement={anchor} key={Indexkey} className={clasToAdd}>
                {children}
            </li>
        );
    }
    return (
        <div data-aos={animation} data-aos-delay={delay} data-aos-anchor-placement={anchor}>
            {children}
        </div>
    );
};
export const UnderHightlight = (prop) => {
    const { children, onClick, classToAdd = "" } = prop
    return (<>&nbsp;
        <span className={`${classToAdd} highlight-text bottom-hightlight`} onClick={onClick}>
            {children}
        </span>
        &nbsp;</>);
};
export const HightlightButton = (prop) => {
    const { children, onClick } = prop
    return (<button onClick={onClick} className="highlight-btn highlight-text">
        {children}
    </button >);
};
export const SectionHeading = (prop) => {
    const { children } = prop;
    return (<h2 className="section-heading">{children}</h2 >);
};