const Card = (props) => {
   return (
      <div className="Card">
         <a href={props.link} target="_blank">
            <img src={props.img} alt={name} />  
         </a>
         <div className="card-container">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className="card-location">
               <i class="fa-solid fa-location-dot"></i>
               <h4>{props.location}</h4>
            </div>
         </div>
    </div>
   );
}

export default Card;
