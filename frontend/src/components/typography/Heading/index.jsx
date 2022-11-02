import './styles.css';

const Heading = ({main, secondary}) => {
    return (
        <div className="heading">
            <h1 className="heading__main">{main}</h1>
            <h2 className="heading__secondary">{secondary}</h2>
        </div>
    );
}
export default Heading