import "./navbar.css";

const Navbar = () => {
    const handleTriggerButton = () => {
        const dummyEvent = new CustomEvent('navbarToCard', {
            detail: {
                name: 'yaren'
            }
        })
        window.dispatchEvent(dummyEvent);
    }

    return (
        <nav className="navbar">
            <h3>navbar</h3>
            <button onClick={handleTriggerButton}>event trigger</button>
        </nav>
    )
}



export default Navbar;
