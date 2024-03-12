const Header = ({ setShowFields, showFields, setShowDevicePreview, showDevicePreview, setShowInfoModal, showInfoModal, shareLink, downloadJson }) => {
    return <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 10 }}>
        <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={shareLink}>
                <i className="fas fa-share-alt"></i>
            </button>
            <button onClick={downloadJson}>
                <i className="fas fa-download"></i>
            </button>
            <button onClick={() => setShowInfoModal(!showInfoModal)}>
                <i className="fas fa-info"></i>
            </button>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => setShowFields(!showFields)}>
                <i className="fas fa-cog"></i>
            </button>
            <button onClick={() => setShowDevicePreview(!showDevicePreview)}>
                <i className="fas fa-mobile-alt"></i>
            </button>
        </div>
    </div>
}

export default Header;