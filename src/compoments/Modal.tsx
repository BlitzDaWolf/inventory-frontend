const Modal = ({Title, children, OnClose} : {Title: string, children?: React.ReactNode, OnClose: Function}) => {

    return (<div className="modal">
        <div className="modal-body">
            <div className="modal-head">
                <div>{Title}</div>
                <div className="modal-close" onClick={() => OnClose()}>X</div>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>)
}

export default Modal;