
const PokemonCard = ({ id, name, image, type }) => {

    return (
        <div className={`thumb-container ${type}`}>
            <div className="number">
                <h3>#{id>9? id: `0${id}` }</h3>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h2>{
                    name.charAt(0).toUpperCase()+name.slice(1)
                }</h2>
                <h3>Type: {type}</h3>
            </div>
        </div>)
}
export default PokemonCard