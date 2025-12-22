import { Link } from "react-router-dom";

function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((prod) => (
        <div key={prod.id} className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{prod.name}</h5>
              <p className="card-text">{prod.description}</p>
              <Link to={`/item/${prod.id}`} className="btn btn-dark">
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;