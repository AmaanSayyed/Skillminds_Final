const InputField = ({type,name,id,placeholder,value,onchange,icon,error}) => {
    return (
        <div className="form-group col-md-6">
            <input 
                type={type} 
                className="form-control" 
                name={name}
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={onchange} 
                required
            />
            {icon && <i className={`fal fa-${icon}`}></i>}
            {error && <span className="tw-text-red-500">{error}</span>}
        </div>
    );
}
 
export default InputField;