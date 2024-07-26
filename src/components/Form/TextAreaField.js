const TextAreaField = ({ name, id, placeholder, value, onchange, icon,error }) => {
    return (
        <div className="form-group col-12">
            <textarea
                name={name}
                id={id}
                cols="30"
                rows="3"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                required
            ></textarea>
            {icon && <i className={`fal fa-${icon}`}></i>}
            {error && <span className="tw-text-red-500">{error}</span>}
        </div>
    );
};

export default TextAreaField;
