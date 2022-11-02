import './styles.css';

const Anchor = ({href, children}) => {
    return (
        <div className="anchor">
            <a href={href} className="anchor__text">
                {children}
            </a>
            <div className="anchor__underscore"></div>
        </div>
    );
};
        
export default Anchor;