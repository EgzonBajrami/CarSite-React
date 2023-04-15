import './Sidebar.css'

const Sidebar = ({ setShow}) =>{
    return <>
    <div className="sidebar-wrapper">
        <div className="sidebar-items">
            <div className="items" onClick={()=>{
                setShow('product');
            }}>
                <p>Add a product.</p>
            </div>
            <div className="items"
            onClick={()=>{
                setShow('edit')
            }}
            >
                <p>Add a product.</p>
            </div>
        </div>

    </div>
    </>
}
export default Sidebar;