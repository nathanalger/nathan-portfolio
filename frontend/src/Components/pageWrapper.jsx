import './CSS/PageWrapper.css'
const pageWrapper = ({ children, props }) => {

    return (
        <>
            <div className="page-wrapper">
                { children }
            </div>
        </>
    );

}

export default pageWrapper;