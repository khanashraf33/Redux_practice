import { useEffect, useState } from "react"




const ProductListScreenDummy = () =>{
    const [productsaxios, setProductsaxios] = useState([])
    const [productsfetch, setProductsfetch] = useState([])
    const [user,setUser] = useState({
        id:"",
        name:"",
        password:""
        })
    const [newuser, setNewuser] = useState({
        name: "",
        password: "" 
    })
    const [id, setId] = useState("");
    const [product, setProduct] = useState({
        id:"",
        name:"",
        category:""
    })

    useEffect(()=>{
        loadProductAxios();
        
    },[])

     const loadProductAxios = async () =>{
        try{
            const response = await axios.get("http://13.233.168.239:8080/pizzadelivery/pizzas");
            console.log(response.data);
            setProductsaxios(response.data);
        }catch(err)
        {
            console.log(err)
        }
    }

    const loadProductFetch = async () =>{
        try{
            const response = await fetch("http://13.233.168.239:8080/pizzadelivery/pizzas");
            response = await response.json();
            console.log(response.data);
            
        }catch(err)
        {
            console.log(err);
        }
    }

    const updateProduct = async() =>{
        try{
            await axios.put(`http://13.233.168.239:8080/pizzadelivery/user`,{
                id: user.id,
                name: user.name,
                password: user.password
            }).then((res)=>{
                console.log(res.data);
            })
        }catch(err)
        {
            console.log(err);
        }
    }

    const addProduct = async() =>{
        await axios.post(`http://13.233.168.239:8080/pizzadelivery/user`,{
            name: newuser.name,
            password: newuser.password
        }).then((res)=>{
            console.log(res.data);
        })
    }

    const getProduct = async() =>{
        try{
           const res = await axios.get(`http://13.233.168.239:8080/pizzadelivery/user/${id}`)
           setProduct({
            id: res.data.id,
            name: res.data.name,
            category: res.data.category
           })
        }catch(err)
        {
            console.log(err);
        }
    }

    return (
        <>
        <div className="row">
            {
                productsaxios.map((prod) =>{
                    return (
                        <div className="product col-md-5">
                            <div className="title">{prod.title}</div>
                            <div className="descrip">{prod.descrip}</div>
                            <div className="price">{prod.price}</div>
                            <button onClick={()=>{addToCart(prod)}} className="btn btn-success">add</button>
                            <button onClick={()=>{removeFromCart(prod)}} className="btn btn-danger">remove</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
    
}

export default ProductListScreenDummy;