import {useParams} from 'react-router-dom'

function Product(props) {
    const {id} = useParams();
  return (
      <div>
          <h1>Gimnasio #{id}</h1>
      </div>
  )
}

export default Product;