import React,{useState} from 'react'
import {storage, db} from '../Config/Config'
import { collection,  addDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";



export const AddProducts = () => {
    const [producttype, setProductType] = useState("")
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [price, setPrice]=useState('');
    

    const [imageError, setImageError]=useState('');
    
    const [successMsg, setSuccessMsg]=useState('');
    const [uploadError, setUploadError]=useState('');
    const [productimage, setProductImage] = useState("")

    const types =['image/jpg','image/jpeg','image/png','image/PNG', 'image/webp'];
    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
       


        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setProductImage(selectedFile);
                setImageError('');

            }
            else {
                setProductImage(null);
                setImageError('please select a valid image file type(png or jpg)')
            }
        }
        else {
            setImageError('please select your file');
        }
    }

    const handleAddProducts = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `product-images${producttype.toUpperCase()}/${Date.now()}`);
        // console.log(storageRef._location.path)
        uploadBytes(storageRef, productimage)
            .then(() => {
                getDownloadURL(storageRef).then(url => {
                    addDoc(collection(db, `products-${producttype.toUpperCase()}`), {
                        title,
                        producttype,
                        description,
                        price: Number(price),
                        url
                    }).then(() => {
                        setSuccessMsg('Product added successfully');
                        setTitle('');
                        setProductType('');
                        setDescription('');
                        setPrice('');
                        document.getElementById('file').value='';
                        setImageError('');
                        setUploadError('');
                        setTimeout(()=>{
                            setSuccessMsg('');
                        },3000)

                    }).catch((error) => { setUploadError(error.message) });
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
        

     

    return (


    <div className='container'>
        <br></br>
        <br></br>
        <h1>Add Products</h1>
        <hr></hr>        
        {successMsg&&<>
            <div className='success-msg'>{successMsg}</div>
            <br></br>
        </>} 
        <form autoComplete="off" className='form-group' onSubmit={handleAddProducts}>
            <label>Product Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Product Description</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <br></br>
            <label>Product Type</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setProductType(e.target.value)} value={producttype}></input>
            <br></br>
            <label>Product Price</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <label>Upload Product Image</label>
            <input type="file" id="file" className='form-control' required
            onChange={handleProductImg}></input>
            
            {imageError&&<>
                <br></br>
                <div className='error-msg'>{imageError}</div>
               
            </>}
            <br></br>           
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <button type="submit" className='btn btn-success btn-md'>
                    SUBMIT
                </button>
            </div>
        </form>
        {uploadError&&<>
                <br></br>
                <div className='error-msg'>{uploadError}</div>
                
            </>}

    </div>
)
}
