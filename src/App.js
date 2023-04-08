import logo from './logo.svg';
import './App.css';
import data from './product.json';
import { BrowserRouter, Route, Routes ,useParams,Link} from 'react-router-dom';

const sectionsList = data.sections;

const ProductCard = (props)=>{
  return(
    
    <div className='card w-25'>
      <Link to={"/product/"+ props.data.id}>
      <img src={props.data.img_url} alt='product-img' width="100%"/>
      <p>{props.data.title}</p>
      <p>{props.data.price}</p>
      </Link>
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

const ProductDetails = (props)=>{
      const {id} = useParams();
      let product =props.productlist.find(p =>p.id == id);
      
     return(
      <div className='container'>
        <div className='row'>
           <div className='col'>
             <img src={product.img_url} />
           </div>
           <div className='col'>
            <h4>{product.title} </h4>
            <label>Price : {product.price}</label>
            <p>Price : {product.description}</p>
           </div>
        </div>
      </div>
     )
}

const Home = () =>{
  return( <div className="App">
  {sectionsList.map(s=>(<ProductSection title={s.sectionTitle} productlist={s.products}/>))}
</div>)
}

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductDetails productlist={data.sections[0].products}/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
