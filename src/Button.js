function Button({disabled, title}) {
    return (<button type="button"  disabled={disabled} onClick={() => console.log({title})}>{title}</button>)
}

export default Button;
