import logo from './logo.svg';
import './App.css';
import data from './product.json';

const sectionsList = data.sections;

const ProductCard = (props)=>{
  return(
    <div className='card w-25'>
      <img src={props.data.img_url} alt='product-img' width="100%"/>
      <p>{props.data.title}</p>
      <p>{props.data.price}</p>
    </div>
  )
}
const ProductList = (props) =>{
    return(<div className='d-flex'>
       {props.productlist.map(p=>(<ProductCard data={p}/>))}
      </div>)
}

function ProductSection(props)
{
    return(
      <>
         <h1>{props.title}</h1>
         <ProductList productlist = {props.productlist}/>
      </>
    )
}

function App() {
  return (
    <div className="App">
        {sectionsList.map(s=>(<ProductSection title={s.sectionTitle} productlist={s.products}/>))}
    </div>
  );
}

export default App;
