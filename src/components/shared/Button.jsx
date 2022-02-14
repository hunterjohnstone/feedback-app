import { propTypes } from "prop-types"

function Button({ children, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled} className = 
        {`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    isDisabled:false,
    version:'primary',
    type:'button',
}

export default Button