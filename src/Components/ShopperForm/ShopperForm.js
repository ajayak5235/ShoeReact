import { useContext, useState } from 'react';
import classes from './ShopperForm.module.css'
import shopperListContext from '../../store/shoe-list-context';


const ShopperForm = () => {

    const [Shoename,setName]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState(0);
    const [parachange,setParachange]=useState(classes.para)
    const [l,setL]=useState(0)
    const [m,setM]=useState(0)
    const [s,setS]=useState(0)

    const shopperlistContext=useContext(shopperListContext)
    const nameHandler=(event)=>{
        event.preventDefault();
        setName(event.target.value.trim())
        
    }
    const descHandler=(event)=>{
        event.preventDefault();
        setDescription(event.target.value.trim())
        
    }
    const priceHandler=(event)=>{
        event.preventDefault();
        setPrice(event.target.value)
    }

    const lHandler=(event)=>{
        event.preventDefault();
        setL(event.target.value)
    }
    const mHandler=(event)=>{
        event.preventDefault();
        setM(event.target.value)
    }
    const sHandler=(event)=>{
        event.preventDefault();
        setS(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(Shoename.length===0 || description.length===0){
            setParachange(classes.paras)
            return ;
        }else {
            setParachange(classes.para)
            const id=Math.random().toString();
            const item={Shoename,description,price,id,l,m,s};
            shopperlistContext.addItems(item)
        }
    }

    return <div >
        <form className={classes.form} onSubmit={submitHandler}>

            <div>
                <label htmlFor='shoppername'>Shoe Name</label><br></br>
                <input value={Shoename}  type='text' id='Shoename' onChange={nameHandler}/>
            </div>
            <div>
                <label htmlFor='description'>Description</label><br></br>
                <input value={description} type='text' id='description' onChange={descHandler}/>
            </div>
            <div>
                <label htmlFor='price'>Price</label><br></br>
                <input value={price} type='number' min={0} id='price' onChange={priceHandler}/>
            </div>
            <div className={classes.quantity}>
                <label htmlFor='quantity'>Quantity Available</label><br></br>
                <input value={l} type='number' min={0} id='l' onChange={lHandler}/>
                <input value={m} type='number' min={0} id='m' onChange={mHandler}/>
                <input value={s} type='number' min={0} id='s' onChange={sHandler}/>
            </div>
            
            <button className={classes.button} type='submit'>Add Shoe List</button>

        </form>
        <p className={parachange}>no empty field allowed</p>
    </div>


}


export default ShopperForm