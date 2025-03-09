import './index.css';

const Item=props=>{
    const {each,deleteItem}=props
    const {id,task}=each

    const onDelete=()=>{
        deleteItem(id)
    }

    return(
    <li className="item">
        <p>{task}</p>
        <button onClick={onDelete}  className="btn">Delete</button>
    </li>)
}

export default Item