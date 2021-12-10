import Cards from "./cards";


function Home(props){
    return (
        
        <div>
            <div className="card">
            

             <div className="card-body">
             <h5 className="card-title">El mejor Gimnasio es el tuyo</h5>
             <p className="card-text">Contanos a qué gimnasio vas vos</p>
           
            </div>

            <Cards />
</div>

        </div>
    )
}
export default Home;